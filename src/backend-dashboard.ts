import { Dashboard, GraphWidget, GraphWidgetView, PeriodOverride, TextWidget, IWidget } from '@aws-cdk/aws-cloudwatch';
import { IBucket } from '@aws-cdk/aws-s3';
import { Construct, Duration } from '@aws-cdk/core';
import { DenyList } from './backend/deny-list';
import { Ingestion } from './backend/ingestion';
import { Inventory } from './backend/inventory';
import { Orchestration } from './backend/orchestration';
import { DocumentationLanguage } from './backend/shared/language';
import { lambdaFunctionUrl, lambdaSearchLogGroupUrl, s3ObjectUrl, sqsQueueUrl, stateMachineUrl } from './deep-link';
import { fillMetric } from './metric-utils';
import { PackageSourceBindResult } from './package-source';

export interface BackendDashboardProps {
  readonly dashboardName?: string;
  readonly packageSources: PackageSourceBindResult[];
  readonly ingestion: Ingestion;
  readonly orchestration: Orchestration;
  readonly inventory: Inventory;
  readonly denyList: DenyList;
  readonly packageData: IBucket;
}

export class BackendDashboard extends Construct {
  public constructor(scope: Construct, id: string, props: BackendDashboardProps) {
    super(scope, id);

    new Dashboard(this, 'Resource', {
      dashboardName: props.dashboardName,
      periodOverride: PeriodOverride.INHERIT,
      widgets: [
        [
          new TextWidget({
            height: 2,
            width: 24,
            markdown: [
              '# Catalog Overview',
              '',
              `[button:Package Data](${s3ObjectUrl(props.packageData)})`,
              `[button:Catalog Builder](${lambdaFunctionUrl(props.orchestration.catalogBuilder)})`,
              `[button:Inventory Canary](${lambdaFunctionUrl(props.inventory.function)})`,
              `[button:Search Canary Log Group](${lambdaSearchLogGroupUrl(props.inventory.function)})`,
            ].join('\n'),
          }),
        ],
        [
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'Catalog Size',
            left: [
              props.inventory.metricSubmoduleCount({ label: 'Submodules' }),
              props.inventory.metricPackageVersionCount({ label: 'Package Versions' }),
              props.inventory.metricPackageMajorCount({ label: 'Package Majors' }),
              props.inventory.metricPackageCount({ label: 'Packages' }),
            ],
            leftYAxis: { min: 0 },
          }),
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'Catalog Issues',
            left: [
              props.inventory.metricUnknownObjectCount({ label: 'Unknown' }),
              props.inventory.metricMissingAssemblyCount({ label: 'Missing Assembly' }),
              props.inventory.metricMissingPackageMetadataCount({ label: 'Missing Metadata' }),
              props.inventory.metricMissingPackageTarballCount({ label: 'Missing Tarball' }),
            ],
            leftYAxis: { min: 0 },
          }),
        ],
        ...this.catalogOverviewLanguageSections(props.inventory),
        ...renderPackageSourcesWidgets(props.packageSources),
        [
          new TextWidget({
            height: 2,
            width: 24,
            markdown: [
              '# Ingestion Function',
              '',
              `[button:Ingestion Function](${lambdaFunctionUrl(props.ingestion.function)})`,
              `[button:Search Log Group](${lambdaSearchLogGroupUrl(props.ingestion.function)})`,
              `[button:DLQ](${sqsQueueUrl(props.ingestion.deadLetterQueue)})`,
            ].join('\n'),
          }),
        ],
        [
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'Function Health',
            left: [
              fillMetric(props.ingestion.function.metricInvocations({ label: 'Invocations' })),
              fillMetric(props.ingestion.function.metricErrors({ label: 'Errors' })),
            ],
            leftYAxis: { min: 0 },
            period: Duration.minutes(1),
          }),
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'Input Queue',
            left: [
              props.ingestion.queue.metricApproximateNumberOfMessagesVisible({ label: 'Visible Messages', period: Duration.minutes(1) }),
              props.ingestion.queue.metricApproximateNumberOfMessagesNotVisible({ label: 'Hidden Messages', period: Duration.minutes(1) }),
            ],
            leftYAxis: { min: 0 },
            right: [
              props.ingestion.queue.metricApproximateAgeOfOldestMessage({ label: 'Oldest Message Age', period: Duration.minutes(1) }),
            ],
            rightAnnotations: [{
              color: '#ffa500',
              label: '10 Minutes',
              value: Duration.minutes(10).toSeconds(),
            }],
            rightYAxis: { min: 0 },
            period: Duration.minutes(1),
          }),
        ],
        [
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'Input Quality',
            left: [
              fillMetric(props.ingestion.metricInvalidAssembly({ label: 'Invalid Assemblies' })),
              fillMetric(props.ingestion.metricInvalidTarball({ label: 'Invalid Tarball' })),
              fillMetric(props.ingestion.metricIneligibleLicense({ label: 'Ineligible License' })),
              fillMetric(props.ingestion.metricMismatchedIdentityRejections({ label: 'Mismatched Identity' })),
              fillMetric(props.ingestion.metricFoundLicenseFile({ label: 'Found License file' })),
            ],
            leftYAxis: { label: 'Count', min: 0, showUnits: false },
            stacked: true,
          }),
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'Dead Letters',
            left: [
              props.ingestion.deadLetterQueue.metricApproximateNumberOfMessagesVisible({ label: 'Visible Messages' }),
              props.ingestion.deadLetterQueue.metricApproximateNumberOfMessagesNotVisible({ label: 'Invisible Messages' }),
            ],
            leftYAxis: { min: 0 },
            right: [
              props.ingestion.deadLetterQueue.metricApproximateAgeOfOldestMessage({ label: 'Oldest Message Age' }),
            ],
            rightYAxis: { min: 0 },
            period: Duration.minutes(1),
          }),
        ],
        [
          new TextWidget({
            height: 2,
            width: 24,
            markdown:
              [
                '# Orchestration',
                '',
                `[button:State Machine](${stateMachineUrl(props.orchestration.stateMachine)})`,
                `[button:DLQ](${sqsQueueUrl(props.orchestration.deadLetterQueue)})`,
                `[button:Redrive DLQ](${lambdaFunctionUrl(props.orchestration.redriveFunction)})`,
                `[button:Reprocess](${lambdaFunctionUrl(props.orchestration.reprocessAllFunction)})`,
              ].join('\n'),
          }),
        ],
        [
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'State Machine Executions',
            left: [
              fillMetric(props.orchestration.stateMachine.metricStarted({ label: 'Started' })),
              fillMetric(props.orchestration.stateMachine.metricSucceeded({ label: 'Succeeded' })),
              fillMetric(props.orchestration.stateMachine.metricAborted({ label: 'Aborted' })),
              fillMetric(props.orchestration.stateMachine.metricFailed({ label: 'Failed' })),
              fillMetric(props.orchestration.stateMachine.metricThrottled({ label: 'Throttled' })),
              fillMetric(props.orchestration.stateMachine.metricTimedOut({ label: 'Timed Out' })),
            ],
            leftYAxis: { min: 0 },
            right: [
              props.orchestration.stateMachine.metricTime({ label: 'Duration' }),
            ],
            rightYAxis: { min: 0 },
          }),
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'Dead Letter Queue',
            left: [
              props.orchestration.deadLetterQueue.metricApproximateNumberOfMessagesVisible({ label: 'Visible Messages' }),
              props.orchestration.deadLetterQueue.metricApproximateNumberOfMessagesNotVisible({ label: 'Invisible Messages' }),
            ],
            leftYAxis: { min: 0 },
            right: [
              props.orchestration.deadLetterQueue.metricApproximateAgeOfOldestMessage({ label: 'Oldest Message Age' }),
            ],
            rightYAxis: { min: 0 },
            period: Duration.minutes(1),
          }),
        ],


        // deny list
        // ----------------------------------------------
        [
          new TextWidget({
            height: 2,
            width: 24,
            markdown:
              [
                '# Deny List',
                '',
                `[button:Deny List Object](${s3ObjectUrl(props.denyList.bucket, props.denyList.objectKey)})`,
                `[button:Prune Function](${lambdaFunctionUrl(props.denyList.prune.pruneHandler)})`,
                `[button:Prune Logs](${lambdaSearchLogGroupUrl(props.denyList.prune.pruneHandler)})`,
                `[button:Delete Queue](${sqsQueueUrl(props.denyList.prune.queue)})`,
                `[button:Delete Logs](${lambdaSearchLogGroupUrl(props.denyList.prune.deleteHandler)})`,
              ].join('\n'),
          }),
        ],
        [
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'Deny List',
            left: [
              fillMetric(props.denyList.metricDenyListRules({ label: 'Rules' }), 'REPEAT'),
              props.denyList.prune.queue.metricNumberOfMessagesDeleted({ label: 'Deleted Files' }),
            ],
            leftYAxis: { min: 0 },
            period: Duration.minutes(5),
          }),
          new GraphWidget({
            height: 6,
            width: 12,
            title: 'Prune Function Health',
            left: [
              fillMetric(props.denyList.prune.pruneHandler.metricInvocations({ label: 'Invocations' })),
              fillMetric(props.denyList.prune.pruneHandler.metricErrors({ label: 'Errors' })),
            ],
            leftYAxis: { min: 0 },
            period: Duration.minutes(5),
          }),
        ],

      ],
    });
  }

  private *catalogOverviewLanguageSections(inventory: Inventory): Generator<IWidget[]> {
    yield [
      new TextWidget({
        height: 2,
        width: 24,
        markdown: '# Documentation Generation',
      }),
    ];
    for (const language of DocumentationLanguage.ALL) {
      yield [
        new TextWidget({
          height: 1,
          width: 24,
          markdown: `## Language: ${language.toString()}`,
        }),
      ];
      yield [
        new GraphWidget({
          height: 6,
          width: 6,
          title: 'Package Versions',
          left: [
            inventory.metricSupportedPackageVersionCount(language, { label: 'Available', color: '#2ca02c' }),
            inventory.metricUnsupportedPackageVersionCount(language, { label: 'Unsupported', color: '#9467bd' }),
            inventory.metricMissingPackageVersionCount(language, { label: 'Missing', color: '#d62728' }),
          ],
          leftYAxis: { showUnits: false },
          view: GraphWidgetView.PIE,
        }),
        new GraphWidget({
          height: 6,
          width: 6,
          title: 'Package Versions',
          left: [
            inventory.metricSupportedPackageVersionCount(language, { label: 'Available', color: '#2ca02c' }),
            inventory.metricUnsupportedPackageVersionCount(language, { label: 'Unsupported', color: '#9467bd' }),
            inventory.metricMissingPackageVersionCount(language, { label: 'Missing', color: '#d62728' }),
          ],
          leftYAxis: { showUnits: false },
          stacked: true,
        }),
        new GraphWidget({
          height: 6,
          width: 6,
          title: 'Package Version Submodules',
          left: [
            inventory.metricSupportedSubmoduleCount(language, { label: 'Available', color: '#2ca02c' }),
            inventory.metricUnsupportedSubmoduleCount(language, { label: 'Unsupported', color: '#9467bd' }),
            inventory.metricMissingSubmoduleCount(language, { label: 'Missing', color: '#d62728' }),
          ],
          leftYAxis: { showUnits: false },
          view: GraphWidgetView.PIE,
        }),
        new GraphWidget({
          height: 6,
          width: 6,
          title: 'Package Version Submodules',
          left: [
            inventory.metricSupportedSubmoduleCount(language, { label: 'Available', color: '#2ca02c' }),
            inventory.metricUnsupportedSubmoduleCount(language, { label: 'Unsupported', color: '#9467bd' }),
            inventory.metricMissingSubmoduleCount(language, { label: 'Missing', color: '#d62728' }),
          ],
          leftYAxis: { showUnits: false },
          stacked: true,
        }),
      ];
    }
  }
}

function* renderPackageSourcesWidgets(packageSources: PackageSourceBindResult[]): Generator<IWidget[], undefined, undefined> {
  for (const packageSource of packageSources) {
    yield [
      new TextWidget({
        height: 2,
        width: 24,
        markdown: [
          `# ${packageSource.name}`,
          '',
          ...(packageSource.links ?? [])
            .map(({ name, primary, url }) => `[${primary ? 'button:primary' : 'button'}:${name}](${url})`),
        ].join('\n'),
      }),
    ];
    yield* packageSource.dashboardWidgets;
  }
  return;
}
