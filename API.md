# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConstructHub <a name="ConstructHub" id="construct-hub.ConstructHub"></a>

- *Implements:* @aws-cdk/aws-iam.IGrantable

Construct Hub.

#### Initializers <a name="Initializers" id="construct-hub.ConstructHub.Initializer"></a>

```typescript
import { ConstructHub } from 'construct-hub'

new ConstructHub(scope: Construct, id: string, props?: ConstructHubProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.ConstructHub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#construct-hub.ConstructHub.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#construct-hub.ConstructHub.Initializer.parameter.props">props</a></code> | <code><a href="#construct-hub.ConstructHubProps">ConstructHubProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="construct-hub.ConstructHub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="construct-hub.ConstructHub.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="construct-hub.ConstructHub.Initializer.parameter.props"></a>

- *Type:* <a href="#construct-hub.ConstructHubProps">ConstructHubProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.ConstructHub.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="construct-hub.ConstructHub.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.ConstructHub.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="construct-hub.ConstructHub.isConstruct"></a>

```typescript
import { ConstructHub } from 'construct-hub'

ConstructHub.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="construct-hub.ConstructHub.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.ConstructHub.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#construct-hub.ConstructHub.property.grantPrincipal">grantPrincipal</a></code> | <code>@aws-cdk/aws-iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#construct-hub.ConstructHub.property.ingestionQueue">ingestionQueue</a></code> | <code>@aws-cdk/aws-sqs.IQueue</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="construct-hub.ConstructHub.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="construct-hub.ConstructHub.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* @aws-cdk/aws-iam.IPrincipal

The principal to grant permissions to.

---

##### `ingestionQueue`<sup>Required</sup> <a name="ingestionQueue" id="construct-hub.ConstructHub.property.ingestionQueue"></a>

```typescript
public readonly ingestionQueue: IQueue;
```

- *Type:* @aws-cdk/aws-sqs.IQueue

---


### S3StorageFactory <a name="S3StorageFactory" id="construct-hub.S3StorageFactory"></a>

Create s3 storage resources.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.S3StorageFactory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#construct-hub.S3StorageFactory.newBucket">newBucket</a></code> | Create a new bucket in a storage config aware manner. |

---

##### `toString` <a name="toString" id="construct-hub.S3StorageFactory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `newBucket` <a name="newBucket" id="construct-hub.S3StorageFactory.newBucket"></a>

```typescript
public newBucket(scope: Construct, id: string, props?: BucketProps): Bucket
```

Create a new bucket in a storage config aware manner.

###### `scope`<sup>Required</sup> <a name="scope" id="construct-hub.S3StorageFactory.newBucket.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="construct-hub.S3StorageFactory.newBucket.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="construct-hub.S3StorageFactory.newBucket.parameter.props"></a>

- *Type:* @aws-cdk/aws-s3.BucketProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.S3StorageFactory.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |
| <code><a href="#construct-hub.S3StorageFactory.getOrCreate">getOrCreate</a></code> | Retrieve or create the storage factory for the current scope. |

---

##### `isConstruct` <a name="isConstruct" id="construct-hub.S3StorageFactory.isConstruct"></a>

```typescript
import { S3StorageFactory } from 'construct-hub'

S3StorageFactory.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="construct-hub.S3StorageFactory.isConstruct.parameter.x"></a>

- *Type:* any

---

##### `getOrCreate` <a name="getOrCreate" id="construct-hub.S3StorageFactory.getOrCreate"></a>

```typescript
import { S3StorageFactory } from 'construct-hub'

S3StorageFactory.getOrCreate(scope: Construct, props?: S3StorageFactoryProps)
```

Retrieve or create the storage factory for the current scope.

This is stack singleton.

###### `scope`<sup>Required</sup> <a name="scope" id="construct-hub.S3StorageFactory.getOrCreate.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

###### `props`<sup>Optional</sup> <a name="props" id="construct-hub.S3StorageFactory.getOrCreate.parameter.props"></a>

- *Type:* <a href="#construct-hub.S3StorageFactoryProps">S3StorageFactoryProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.S3StorageFactory.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="construct-hub.S3StorageFactory.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---


## Structs <a name="Structs" id="Structs"></a>

### AlarmActions <a name="AlarmActions" id="construct-hub.AlarmActions"></a>

CloudWatch alarm actions to perform.

#### Initializer <a name="Initializer" id="construct-hub.AlarmActions.Initializer"></a>

```typescript
import { AlarmActions } from 'construct-hub'

const alarmActions: AlarmActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.AlarmActions.property.highSeverity">highSeverity</a></code> | <code>string</code> | The ARN of the CloudWatch alarm action to take for alarms of high-severity alarms. |
| <code><a href="#construct-hub.AlarmActions.property.highSeverityAction">highSeverityAction</a></code> | <code>@aws-cdk/aws-cloudwatch.IAlarmAction</code> | The CloudWatch alarm action to take for alarms of high-severity alarms. |
| <code><a href="#construct-hub.AlarmActions.property.normalSeverity">normalSeverity</a></code> | <code>string</code> | The ARN of the CloudWatch alarm action to take for alarms of normal severity. |
| <code><a href="#construct-hub.AlarmActions.property.normalSeverityAction">normalSeverityAction</a></code> | <code>@aws-cdk/aws-cloudwatch.IAlarmAction</code> | The CloudWatch alarm action to take for alarms of normal severity. |

---

##### `highSeverity`<sup>Optional</sup> <a name="highSeverity" id="construct-hub.AlarmActions.property.highSeverity"></a>

```typescript
public readonly highSeverity: string;
```

- *Type:* string

The ARN of the CloudWatch alarm action to take for alarms of high-severity alarms.

This must be an ARN that can be used with CloudWatch alarms.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions)

---

##### `highSeverityAction`<sup>Optional</sup> <a name="highSeverityAction" id="construct-hub.AlarmActions.property.highSeverityAction"></a>

```typescript
public readonly highSeverityAction: IAlarmAction;
```

- *Type:* @aws-cdk/aws-cloudwatch.IAlarmAction

The CloudWatch alarm action to take for alarms of high-severity alarms.

This must be an ARN that can be used with CloudWatch alarms.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions)

---

##### `normalSeverity`<sup>Optional</sup> <a name="normalSeverity" id="construct-hub.AlarmActions.property.normalSeverity"></a>

```typescript
public readonly normalSeverity: string;
```

- *Type:* string
- *Default:* no actions are taken in response to alarms of normal severity

The ARN of the CloudWatch alarm action to take for alarms of normal severity.

This must be an ARN that can be used with CloudWatch alarms.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions)

---

##### `normalSeverityAction`<sup>Optional</sup> <a name="normalSeverityAction" id="construct-hub.AlarmActions.property.normalSeverityAction"></a>

```typescript
public readonly normalSeverityAction: IAlarmAction;
```

- *Type:* @aws-cdk/aws-cloudwatch.IAlarmAction
- *Default:* no actions are taken in response to alarms of normal severity

The CloudWatch alarm action to take for alarms of normal severity.

This must be an ARN that can be used with CloudWatch alarms.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-actions)

---

### Category <a name="Category" id="construct-hub.Category"></a>

A category of packages.

#### Initializer <a name="Initializer" id="construct-hub.Category.Initializer"></a>

```typescript
import { Category } from 'construct-hub'

const category: Category = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.Category.property.title">title</a></code> | <code>string</code> | The title on the category button as it appears in the Construct Hub home page. |
| <code><a href="#construct-hub.Category.property.url">url</a></code> | <code>string</code> | The URL that this category links to. |

---

##### `title`<sup>Required</sup> <a name="title" id="construct-hub.Category.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title on the category button as it appears in the Construct Hub home page.

---

##### `url`<sup>Required</sup> <a name="url" id="construct-hub.Category.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL that this category links to.

This is the full path to the link that this category button will have. You can use any query options such as `?keywords=`, `?q=`, or a combination thereof.

---

###### Example <a name="Example" id="construct-hub.Category.property.url.example"></a>

```typescript
"/search?keywords=monitoring"
```


### CodeArtifactDomainProps <a name="CodeArtifactDomainProps" id="construct-hub.CodeArtifactDomainProps"></a>

Information pertaining to an existing CodeArtifact Domain.

#### Initializer <a name="Initializer" id="construct-hub.CodeArtifactDomainProps.Initializer"></a>

```typescript
import { CodeArtifactDomainProps } from 'construct-hub'

const codeArtifactDomainProps: CodeArtifactDomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.CodeArtifactDomainProps.property.name">name</a></code> | <code>string</code> | The name of the CodeArtifact domain. |
| <code><a href="#construct-hub.CodeArtifactDomainProps.property.upstreams">upstreams</a></code> | <code>string[]</code> | Any upstream repositories in this CodeArtifact domain that should be configured on the internal CodeArtifact repository. |

---

##### `name`<sup>Required</sup> <a name="name" id="construct-hub.CodeArtifactDomainProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the CodeArtifact domain.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="construct-hub.CodeArtifactDomainProps.property.upstreams"></a>

```typescript
public readonly upstreams: string[];
```

- *Type:* string[]

Any upstream repositories in this CodeArtifact domain that should be configured on the internal CodeArtifact repository.

---

### CodeArtifactProps <a name="CodeArtifactProps" id="construct-hub.sources.CodeArtifactProps"></a>

#### Initializer <a name="Initializer" id="construct-hub.sources.CodeArtifactProps.Initializer"></a>

```typescript
import { sources } from 'construct-hub'

const codeArtifactProps: sources.CodeArtifactProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.sources.CodeArtifactProps.property.repository">repository</a></code> | <code>@aws-cdk/aws-codeartifact.CfnRepository</code> | The CodeArtifact repository where packages are obtained from. |
| <code><a href="#construct-hub.sources.CodeArtifactProps.property.bucket">bucket</a></code> | <code>@aws-cdk/aws-s3.IBucket</code> | The S3 bucket where packages will be staged. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="construct-hub.sources.CodeArtifactProps.property.repository"></a>

```typescript
public readonly repository: CfnRepository;
```

- *Type:* @aws-cdk/aws-codeartifact.CfnRepository

The CodeArtifact repository where packages are obtained from.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="construct-hub.sources.CodeArtifactProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* @aws-cdk/aws-s3.IBucket

The S3 bucket where packages will be staged.

---

### ConstructHubProps <a name="ConstructHubProps" id="construct-hub.ConstructHubProps"></a>

Props for `ConstructHub`.

#### Initializer <a name="Initializer" id="construct-hub.ConstructHubProps.Initializer"></a>

```typescript
import { ConstructHubProps } from 'construct-hub'

const constructHubProps: ConstructHubProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.ConstructHubProps.property.additionalDomains">additionalDomains</a></code> | <code><a href="#construct-hub.DomainRedirectSource">DomainRedirectSource</a>[]</code> | Additional domains which will be set up to redirect to the primary construct hub domain. |
| <code><a href="#construct-hub.ConstructHubProps.property.alarmActions">alarmActions</a></code> | <code><a href="#construct-hub.AlarmActions">AlarmActions</a></code> | Actions to perform when alarms are set. |
| <code><a href="#construct-hub.ConstructHubProps.property.allowedLicenses">allowedLicenses</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a>[]</code> | The allowed licenses for packages indexed by this instance of ConstructHub. |
| <code><a href="#construct-hub.ConstructHubProps.property.backendDashboardName">backendDashboardName</a></code> | <code>string</code> | The name of the CloudWatch dashboard that represents the health of backend systems. |
| <code><a href="#construct-hub.ConstructHubProps.property.categories">categories</a></code> | <code><a href="#construct-hub.Category">Category</a>[]</code> | Browse categories. |
| <code><a href="#construct-hub.ConstructHubProps.property.codeArtifactDomain">codeArtifactDomain</a></code> | <code><a href="#construct-hub.CodeArtifactDomainProps">CodeArtifactDomainProps</a></code> | When using a CodeArtifact package source, it is often desirable to have ConstructHub provision it's internal CodeArtifact repository in the same CodeArtifact domain, and to configure the package source repository as an upstream of the internal repository. |
| <code><a href="#construct-hub.ConstructHubProps.property.denyList">denyList</a></code> | <code><a href="#construct-hub.DenyListRule">DenyListRule</a>[]</code> | A list of packages to block from the construct hub. |
| <code><a href="#construct-hub.ConstructHubProps.property.domain">domain</a></code> | <code><a href="#construct-hub.Domain">Domain</a></code> | Connect the hub to a domain (requires a hosted zone and a certificate). |
| <code><a href="#construct-hub.ConstructHubProps.property.failoverStorage">failoverStorage</a></code> | <code>boolean</code> | Wire construct hub to use the failover storage buckets. |
| <code><a href="#construct-hub.ConstructHubProps.property.featuredPackages">featuredPackages</a></code> | <code><a href="#construct-hub.FeaturedPackages">FeaturedPackages</a></code> | Configuration for packages to feature on the home page. |
| <code><a href="#construct-hub.ConstructHubProps.property.featureFlags">featureFlags</a></code> | <code><a href="#construct-hub.FeatureFlags">FeatureFlags</a></code> | Configure feature flags for the web app. |
| <code><a href="#construct-hub.ConstructHubProps.property.fetchPackageStats">fetchPackageStats</a></code> | <code>boolean</code> | Configure whether or not the backend should periodically query NPM for the number of downloads a package has in the past week, and display download counts on the web app. |
| <code><a href="#construct-hub.ConstructHubProps.property.isolateSensitiveTasks">isolateSensitiveTasks</a></code> | <code>boolean</code> | Whether compute environments for sensitive tasks (which operate on un-trusted complex data, such as the transliterator, which operates with externally-sourced npm package tarballs) should run in network-isolated environments. |
| <code><a href="#construct-hub.ConstructHubProps.property.logRetention">logRetention</a></code> | <code>@aws-cdk/aws-logs.RetentionDays</code> | How long to retain CloudWatch logs for. |
| <code><a href="#construct-hub.ConstructHubProps.property.packageLinks">packageLinks</a></code> | <code><a href="#construct-hub.PackageLinkConfig">PackageLinkConfig</a>[]</code> | Configuration for custom package page links. |
| <code><a href="#construct-hub.ConstructHubProps.property.packageSources">packageSources</a></code> | <code><a href="#construct-hub.IPackageSource">IPackageSource</a>[]</code> | The package sources to register with this ConstructHub instance. |
| <code><a href="#construct-hub.ConstructHubProps.property.packageTagGroups">packageTagGroups</a></code> | <code><a href="#construct-hub.PackageTagGroup">PackageTagGroup</a>[]</code> | Optional configuration for grouping custom package tags. |
| <code><a href="#construct-hub.ConstructHubProps.property.packageTags">packageTags</a></code> | <code><a href="#construct-hub.PackageTag">PackageTag</a>[]</code> | Configuration for custom package tags. |
| <code><a href="#construct-hub.ConstructHubProps.property.preloadScript">preloadScript</a></code> | <code><a href="#construct-hub.PreloadFile">PreloadFile</a></code> | Javascript to run on webapp before app loads. |
| <code><a href="#construct-hub.ConstructHubProps.property.reprocessFrequency">reprocessFrequency</a></code> | <code>@aws-cdk/core.Duration</code> | How frequently all packages should get fully reprocessed. |
| <code><a href="#construct-hub.ConstructHubProps.property.sensitiveTaskIsolation">sensitiveTaskIsolation</a></code> | <code><a href="#construct-hub.Isolation">Isolation</a></code> | Whether compute environments for sensitive tasks (which operate on un-trusted complex data, such as the transliterator, which operates with externally-sourced npm package tarballs) should run in network-isolated environments. |

---

##### `additionalDomains`<sup>Optional</sup> <a name="additionalDomains" id="construct-hub.ConstructHubProps.property.additionalDomains"></a>

```typescript
public readonly additionalDomains: DomainRedirectSource[];
```

- *Type:* <a href="#construct-hub.DomainRedirectSource">DomainRedirectSource</a>[]
- *Default:* []

Additional domains which will be set up to redirect to the primary construct hub domain.

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="construct-hub.ConstructHubProps.property.alarmActions"></a>

```typescript
public readonly alarmActions: AlarmActions;
```

- *Type:* <a href="#construct-hub.AlarmActions">AlarmActions</a>

Actions to perform when alarms are set.

---

##### `allowedLicenses`<sup>Optional</sup> <a name="allowedLicenses" id="construct-hub.ConstructHubProps.property.allowedLicenses"></a>

```typescript
public readonly allowedLicenses: SpdxLicense[];
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>[]
- *Default:* [...SpdxLicense.apache(),...SpdxLicense.bsd(),...SpdxLicense.cddl(),...SpdxLicense.epl(),SpdxLicense.ISC,...SpdxLicense.mit(),SpdxLicense.MPL_2_0]

The allowed licenses for packages indexed by this instance of ConstructHub.

---

##### `backendDashboardName`<sup>Optional</sup> <a name="backendDashboardName" id="construct-hub.ConstructHubProps.property.backendDashboardName"></a>

```typescript
public readonly backendDashboardName: string;
```

- *Type:* string

The name of the CloudWatch dashboard that represents the health of backend systems.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="construct-hub.ConstructHubProps.property.categories"></a>

```typescript
public readonly categories: Category[];
```

- *Type:* <a href="#construct-hub.Category">Category</a>[]

Browse categories.

Each category will appear in the home page as a button with a link to the relevant search query.

---

##### `codeArtifactDomain`<sup>Optional</sup> <a name="codeArtifactDomain" id="construct-hub.ConstructHubProps.property.codeArtifactDomain"></a>

```typescript
public readonly codeArtifactDomain: CodeArtifactDomainProps;
```

- *Type:* <a href="#construct-hub.CodeArtifactDomainProps">CodeArtifactDomainProps</a>
- *Default:* none.

When using a CodeArtifact package source, it is often desirable to have ConstructHub provision it's internal CodeArtifact repository in the same CodeArtifact domain, and to configure the package source repository as an upstream of the internal repository.

This way, all packages in the source are available to ConstructHub's backend processing.

---

##### `denyList`<sup>Optional</sup> <a name="denyList" id="construct-hub.ConstructHubProps.property.denyList"></a>

```typescript
public readonly denyList: DenyListRule[];
```

- *Type:* <a href="#construct-hub.DenyListRule">DenyListRule</a>[]
- *Default:* []

A list of packages to block from the construct hub.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="construct-hub.ConstructHubProps.property.domain"></a>

```typescript
public readonly domain: Domain;
```

- *Type:* <a href="#construct-hub.Domain">Domain</a>

Connect the hub to a domain (requires a hosted zone and a certificate).

---

##### `failoverStorage`<sup>Optional</sup> <a name="failoverStorage" id="construct-hub.ConstructHubProps.property.failoverStorage"></a>

```typescript
public readonly failoverStorage: boolean;
```

- *Type:* boolean
- *Default:* false

Wire construct hub to use the failover storage buckets.

Do not activate this property until you've populated your failover buckets with the necessary data.

> [https://github.com/cdklabs/construct-hub/blob/dev/docs/operator-runbook.md#storage-disaster](https://github.com/cdklabs/construct-hub/blob/dev/docs/operator-runbook.md#storage-disaster)

---

##### `featuredPackages`<sup>Optional</sup> <a name="featuredPackages" id="construct-hub.ConstructHubProps.property.featuredPackages"></a>

```typescript
public readonly featuredPackages: FeaturedPackages;
```

- *Type:* <a href="#construct-hub.FeaturedPackages">FeaturedPackages</a>
- *Default:* Display the 10 most recently updated packages

Configuration for packages to feature on the home page.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="construct-hub.ConstructHubProps.property.featureFlags"></a>

```typescript
public readonly featureFlags: FeatureFlags;
```

- *Type:* <a href="#construct-hub.FeatureFlags">FeatureFlags</a>

Configure feature flags for the web app.

---

##### `fetchPackageStats`<sup>Optional</sup> <a name="fetchPackageStats" id="construct-hub.ConstructHubProps.property.fetchPackageStats"></a>

```typescript
public readonly fetchPackageStats: boolean;
```

- *Type:* boolean
- *Default:* true if packageSources is not specified (the defaults are used), false otherwise

Configure whether or not the backend should periodically query NPM for the number of downloads a package has in the past week, and display download counts on the web app.

---

##### ~~`isolateSensitiveTasks`~~<sup>Optional</sup> <a name="isolateSensitiveTasks" id="construct-hub.ConstructHubProps.property.isolateSensitiveTasks"></a>

- *Deprecated:* use sensitiveTaskIsolation instead.

```typescript
public readonly isolateSensitiveTasks: boolean;
```

- *Type:* boolean

Whether compute environments for sensitive tasks (which operate on un-trusted complex data, such as the transliterator, which operates with externally-sourced npm package tarballs) should run in network-isolated environments.

This implies the creation of additonal resources, including:  - A VPC with only isolated subnets. - VPC Endpoints (CloudWatch Logs, CodeArtifact, CodeArtifact API, S3, ...) - A CodeArtifact Repository with an external connection to npmjs.com

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="construct-hub.ConstructHubProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* @aws-cdk/aws-logs.RetentionDays

How long to retain CloudWatch logs for.

---

##### `packageLinks`<sup>Optional</sup> <a name="packageLinks" id="construct-hub.ConstructHubProps.property.packageLinks"></a>

```typescript
public readonly packageLinks: PackageLinkConfig[];
```

- *Type:* <a href="#construct-hub.PackageLinkConfig">PackageLinkConfig</a>[]

Configuration for custom package page links.

---

##### `packageSources`<sup>Optional</sup> <a name="packageSources" id="construct-hub.ConstructHubProps.property.packageSources"></a>

```typescript
public readonly packageSources: IPackageSource[];
```

- *Type:* <a href="#construct-hub.IPackageSource">IPackageSource</a>[]
- *Default:* a standard npmjs.com package source will be configured.

The package sources to register with this ConstructHub instance.

---

##### `packageTagGroups`<sup>Optional</sup> <a name="packageTagGroups" id="construct-hub.ConstructHubProps.property.packageTagGroups"></a>

```typescript
public readonly packageTagGroups: PackageTagGroup[];
```

- *Type:* <a href="#construct-hub.PackageTagGroup">PackageTagGroup</a>[]

Optional configuration for grouping custom package tags.

---

##### `packageTags`<sup>Optional</sup> <a name="packageTags" id="construct-hub.ConstructHubProps.property.packageTags"></a>

```typescript
public readonly packageTags: PackageTag[];
```

- *Type:* <a href="#construct-hub.PackageTag">PackageTag</a>[]

Configuration for custom package tags.

---

##### `preloadScript`<sup>Optional</sup> <a name="preloadScript" id="construct-hub.ConstructHubProps.property.preloadScript"></a>

```typescript
public readonly preloadScript: PreloadFile;
```

- *Type:* <a href="#construct-hub.PreloadFile">PreloadFile</a>

Javascript to run on webapp before app loads.

---

##### `reprocessFrequency`<sup>Optional</sup> <a name="reprocessFrequency" id="construct-hub.ConstructHubProps.property.reprocessFrequency"></a>

```typescript
public readonly reprocessFrequency: Duration;
```

- *Type:* @aws-cdk/core.Duration
- *Default:* never

How frequently all packages should get fully reprocessed.

See the operator runbook for more information about reprocessing.

> [https://github.com/cdklabs/construct-hub/blob/main/docs/operator-runbook.md](https://github.com/cdklabs/construct-hub/blob/main/docs/operator-runbook.md)

---

##### `sensitiveTaskIsolation`<sup>Optional</sup> <a name="sensitiveTaskIsolation" id="construct-hub.ConstructHubProps.property.sensitiveTaskIsolation"></a>

```typescript
public readonly sensitiveTaskIsolation: Isolation;
```

- *Type:* <a href="#construct-hub.Isolation">Isolation</a>
- *Default:* Isolation.NO_INTERNET_ACCESS

Whether compute environments for sensitive tasks (which operate on un-trusted complex data, such as the transliterator, which operates with externally-sourced npm package tarballs) should run in network-isolated environments.

This implies the creation of additonal resources, including:  - A VPC with only isolated subnets. - VPC Endpoints (CloudWatch Logs, CodeArtifact, CodeArtifact API, S3, ...) - A CodeArtifact Repository with an external connection to npmjs.com

---

### DenyListMap <a name="DenyListMap" id="construct-hub.DenyListMap"></a>

The contents of the deny list file in S3.

#### Initializer <a name="Initializer" id="construct-hub.DenyListMap.Initializer"></a>

```typescript
import { DenyListMap } from 'construct-hub'

const denyListMap: DenyListMap = { ... }
```


### DenyListRule <a name="DenyListRule" id="construct-hub.DenyListRule"></a>

An entry in the list of packages blocked from display in the construct hub.

#### Initializer <a name="Initializer" id="construct-hub.DenyListRule.Initializer"></a>

```typescript
import { DenyListRule } from 'construct-hub'

const denyListRule: DenyListRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.DenyListRule.property.packageName">packageName</a></code> | <code>string</code> | The name of the package to block (npm). |
| <code><a href="#construct-hub.DenyListRule.property.reason">reason</a></code> | <code>string</code> | The reason why this package/version is denied. |
| <code><a href="#construct-hub.DenyListRule.property.version">version</a></code> | <code>string</code> | The package version to block (must be a valid version such as "1.0.3"). |

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="construct-hub.DenyListRule.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The name of the package to block (npm).

---

##### `reason`<sup>Required</sup> <a name="reason" id="construct-hub.DenyListRule.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

The reason why this package/version is denied.

This information will be emitted to the construct hub logs.

---

##### `version`<sup>Optional</sup> <a name="version" id="construct-hub.DenyListRule.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* all versions of this package are blocked.

The package version to block (must be a valid version such as "1.0.3").

---

### Domain <a name="Domain" id="construct-hub.Domain"></a>

Domain configuration for the website.

#### Initializer <a name="Initializer" id="construct-hub.Domain.Initializer"></a>

```typescript
import { Domain } from 'construct-hub'

const domain: Domain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.Domain.property.cert">cert</a></code> | <code>@aws-cdk/aws-certificatemanager.ICertificate</code> | The certificate to use for serving the Construct Hub over a custom domain. |
| <code><a href="#construct-hub.Domain.property.zone">zone</a></code> | <code>@aws-cdk/aws-route53.IHostedZone</code> | The root domain name where this instance of Construct Hub will be served. |
| <code><a href="#construct-hub.Domain.property.monitorCertificateExpiration">monitorCertificateExpiration</a></code> | <code>boolean</code> | Whether the certificate should be monitored for expiration, meaning high severity alarms will be raised if it is due to expire in less than 45 days. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="construct-hub.Domain.property.cert"></a>

```typescript
public readonly cert: ICertificate;
```

- *Type:* @aws-cdk/aws-certificatemanager.ICertificate
- *Default:* a DNS-Validated certificate will be provisioned using the   provided `hostedZone`.

The certificate to use for serving the Construct Hub over a custom domain.

---

##### `zone`<sup>Required</sup> <a name="zone" id="construct-hub.Domain.property.zone"></a>

```typescript
public readonly zone: IHostedZone;
```

- *Type:* @aws-cdk/aws-route53.IHostedZone

The root domain name where this instance of Construct Hub will be served.

---

##### `monitorCertificateExpiration`<sup>Optional</sup> <a name="monitorCertificateExpiration" id="construct-hub.Domain.property.monitorCertificateExpiration"></a>

```typescript
public readonly monitorCertificateExpiration: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the certificate should be monitored for expiration, meaning high severity alarms will be raised if it is due to expire in less than 45 days.

---

### DomainRedirectSource <a name="DomainRedirectSource" id="construct-hub.DomainRedirectSource"></a>

Source domain of the redirect.

#### Initializer <a name="Initializer" id="construct-hub.DomainRedirectSource.Initializer"></a>

```typescript
import { DomainRedirectSource } from 'construct-hub'

const domainRedirectSource: DomainRedirectSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.DomainRedirectSource.property.hostedZone">hostedZone</a></code> | <code>@aws-cdk/aws-route53.IHostedZone</code> | The route53 zone which hosts the source domain. |
| <code><a href="#construct-hub.DomainRedirectSource.property.certificate">certificate</a></code> | <code>@aws-cdk/aws-certificatemanager.ICertificate</code> | The ACM certificate to use for the CloudFront distribution. |

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="construct-hub.DomainRedirectSource.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* @aws-cdk/aws-route53.IHostedZone

The route53 zone which hosts the source domain.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="construct-hub.DomainRedirectSource.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* @aws-cdk/aws-certificatemanager.ICertificate
- *Default:* a certificate is created for this domain.

The ACM certificate to use for the CloudFront distribution.

---

### FeaturedPackages <a name="FeaturedPackages" id="construct-hub.FeaturedPackages"></a>

Configuration for packages to feature on the home page.

#### Initializer <a name="Initializer" id="construct-hub.FeaturedPackages.Initializer"></a>

```typescript
import { FeaturedPackages } from 'construct-hub'

const featuredPackages: FeaturedPackages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.FeaturedPackages.property.sections">sections</a></code> | <code><a href="#construct-hub.FeaturedPackagesSection">FeaturedPackagesSection</a>[]</code> | Grouped sections of packages on the homepage. |

---

##### `sections`<sup>Required</sup> <a name="sections" id="construct-hub.FeaturedPackages.property.sections"></a>

```typescript
public readonly sections: FeaturedPackagesSection[];
```

- *Type:* <a href="#construct-hub.FeaturedPackagesSection">FeaturedPackagesSection</a>[]

Grouped sections of packages on the homepage.

---

### FeaturedPackagesDetail <a name="FeaturedPackagesDetail" id="construct-hub.FeaturedPackagesDetail"></a>

Customization options for a specific package on the home page.

#### Initializer <a name="Initializer" id="construct-hub.FeaturedPackagesDetail.Initializer"></a>

```typescript
import { FeaturedPackagesDetail } from 'construct-hub'

const featuredPackagesDetail: FeaturedPackagesDetail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.FeaturedPackagesDetail.property.name">name</a></code> | <code>string</code> | The name of the package. |
| <code><a href="#construct-hub.FeaturedPackagesDetail.property.comment">comment</a></code> | <code>string</code> | An additional comment to include with the package. |

---

##### `name`<sup>Required</sup> <a name="name" id="construct-hub.FeaturedPackagesDetail.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the package.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="construct-hub.FeaturedPackagesDetail.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

An additional comment to include with the package.

---

### FeaturedPackagesSection <a name="FeaturedPackagesSection" id="construct-hub.FeaturedPackagesSection"></a>

Customization options for one section of the home page.

#### Initializer <a name="Initializer" id="construct-hub.FeaturedPackagesSection.Initializer"></a>

```typescript
import { FeaturedPackagesSection } from 'construct-hub'

const featuredPackagesSection: FeaturedPackagesSection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.FeaturedPackagesSection.property.name">name</a></code> | <code>string</code> | The name of the section (displayed as a header). |
| <code><a href="#construct-hub.FeaturedPackagesSection.property.showLastUpdated">showLastUpdated</a></code> | <code>number</code> | Show the N most recently updated packages in this section. |
| <code><a href="#construct-hub.FeaturedPackagesSection.property.showPackages">showPackages</a></code> | <code><a href="#construct-hub.FeaturedPackagesDetail">FeaturedPackagesDetail</a>[]</code> | Show an explicit list of packages. |

---

##### `name`<sup>Required</sup> <a name="name" id="construct-hub.FeaturedPackagesSection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the section (displayed as a header).

---

##### `showLastUpdated`<sup>Optional</sup> <a name="showLastUpdated" id="construct-hub.FeaturedPackagesSection.property.showLastUpdated"></a>

```typescript
public readonly showLastUpdated: number;
```

- *Type:* number

Show the N most recently updated packages in this section.

Cannot be used with `showPackages`.

---

##### `showPackages`<sup>Optional</sup> <a name="showPackages" id="construct-hub.FeaturedPackagesSection.property.showPackages"></a>

```typescript
public readonly showPackages: FeaturedPackagesDetail[];
```

- *Type:* <a href="#construct-hub.FeaturedPackagesDetail">FeaturedPackagesDetail</a>[]

Show an explicit list of packages.

Cannot be used with `showLastUpdated`.

---

### FeatureFlags <a name="FeatureFlags" id="construct-hub.FeatureFlags"></a>

Enable/disable features for the web app.

#### Initializer <a name="Initializer" id="construct-hub.FeatureFlags.Initializer"></a>

```typescript
import { FeatureFlags } from 'construct-hub'

const featureFlags: FeatureFlags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.FeatureFlags.property.homeRedesign">homeRedesign</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#construct-hub.FeatureFlags.property.searchRedesign">searchRedesign</a></code> | <code>boolean</code> | *No description.* |

---

##### `homeRedesign`<sup>Optional</sup> <a name="homeRedesign" id="construct-hub.FeatureFlags.property.homeRedesign"></a>

```typescript
public readonly homeRedesign: boolean;
```

- *Type:* boolean

---

##### `searchRedesign`<sup>Optional</sup> <a name="searchRedesign" id="construct-hub.FeatureFlags.property.searchRedesign"></a>

```typescript
public readonly searchRedesign: boolean;
```

- *Type:* boolean

---

### FilterTypeValue <a name="FilterTypeValue" id="construct-hub.FilterTypeValue"></a>

#### Initializer <a name="Initializer" id="construct-hub.FilterTypeValue.Initializer"></a>

```typescript
import { FilterTypeValue } from 'construct-hub'

const filterTypeValue: FilterTypeValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.FilterTypeValue.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="construct-hub.FilterTypeValue.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### Highlight <a name="Highlight" id="construct-hub.Highlight"></a>

#### Initializer <a name="Initializer" id="construct-hub.Highlight.Initializer"></a>

```typescript
import { Highlight } from 'construct-hub'

const highlight: Highlight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.Highlight.property.label">label</a></code> | <code>string</code> | The label for the tag being applied. |
| <code><a href="#construct-hub.Highlight.property.color">color</a></code> | <code>string</code> | The hex value string for the color of the tag when displayed. |
| <code><a href="#construct-hub.Highlight.property.icon">icon</a></code> | <code>string</code> | Icon displayed next to highlight on package card. |

---

##### `label`<sup>Required</sup> <a name="label" id="construct-hub.Highlight.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

The label for the tag being applied.

---

##### `color`<sup>Optional</sup> <a name="color" id="construct-hub.Highlight.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

The hex value string for the color of the tag when displayed.

---

##### `icon`<sup>Optional</sup> <a name="icon" id="construct-hub.Highlight.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* string

Icon displayed next to highlight on package card.

---

### Keyword <a name="Keyword" id="construct-hub.Keyword"></a>

#### Initializer <a name="Initializer" id="construct-hub.Keyword.Initializer"></a>

```typescript
import { Keyword } from 'construct-hub'

const keyword: Keyword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.Keyword.property.label">label</a></code> | <code>string</code> | The label for the tag being applied. |
| <code><a href="#construct-hub.Keyword.property.color">color</a></code> | <code>string</code> | The hex value string for the color of the tag when displayed. |

---

##### `label`<sup>Required</sup> <a name="label" id="construct-hub.Keyword.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

The label for the tag being applied.

---

##### `color`<sup>Optional</sup> <a name="color" id="construct-hub.Keyword.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

The hex value string for the color of the tag when displayed.

---

### LinkedResource <a name="LinkedResource" id="construct-hub.LinkedResource"></a>

#### Initializer <a name="Initializer" id="construct-hub.LinkedResource.Initializer"></a>

```typescript
import { LinkedResource } from 'construct-hub'

const linkedResource: LinkedResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.LinkedResource.property.name">name</a></code> | <code>string</code> | The name of the linked resource. |
| <code><a href="#construct-hub.LinkedResource.property.url">url</a></code> | <code>string</code> | The URL where the linked resource can be found. |
| <code><a href="#construct-hub.LinkedResource.property.primary">primary</a></code> | <code>boolean</code> | Whether this is the primary resource of the bound package source. |

---

##### `name`<sup>Required</sup> <a name="name" id="construct-hub.LinkedResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the linked resource.

---

##### `url`<sup>Required</sup> <a name="url" id="construct-hub.LinkedResource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL where the linked resource can be found.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="construct-hub.LinkedResource.property.primary"></a>

```typescript
public readonly primary: boolean;
```

- *Type:* boolean

Whether this is the primary resource of the bound package source.

It is not necessary that there is one, and there could be multiple primary resources. The buttons for those will be rendered with a different style on the dashboard.

---

### NpmJsProps <a name="NpmJsProps" id="construct-hub.sources.NpmJsProps"></a>

#### Initializer <a name="Initializer" id="construct-hub.sources.NpmJsProps.Initializer"></a>

```typescript
import { sources } from 'construct-hub'

const npmJsProps: sources.NpmJsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.sources.NpmJsProps.property.canaryPackage">canaryPackage</a></code> | <code>string</code> | The package that is monitored by the package canary, if enabled by `enableCanary`. |
| <code><a href="#construct-hub.sources.NpmJsProps.property.canarySla">canarySla</a></code> | <code>@aws-cdk/core.Duration</code> | The maximum amount of time it is supposed to take for packages to become visible in this ConstructHub instance. |
| <code><a href="#construct-hub.sources.NpmJsProps.property.enableCanary">enableCanary</a></code> | <code>boolean</code> | Registers a package canary, which will track availability of a canary package in ConstructHub, and emit dedicated metrics. |
| <code><a href="#construct-hub.sources.NpmJsProps.property.stagingBucket">stagingBucket</a></code> | <code>@aws-cdk/aws-s3.IBucket</code> | The bucket to use for staging npm packages. |

---

##### `canaryPackage`<sup>Optional</sup> <a name="canaryPackage" id="construct-hub.sources.NpmJsProps.property.canaryPackage"></a>

```typescript
public readonly canaryPackage: string;
```

- *Type:* string
- *Default:* 'construct-hub-probe'

The package that is monitored by the package canary, if enabled by `enableCanary`.

---

##### `canarySla`<sup>Optional</sup> <a name="canarySla" id="construct-hub.sources.NpmJsProps.property.canarySla"></a>

```typescript
public readonly canarySla: Duration;
```

- *Type:* @aws-cdk/core.Duration
- *Default:* Duration.minutes(5)

The maximum amount of time it is supposed to take for packages to become visible in this ConstructHub instance.

If `enableCanary` is enabled, an alarm will trigger if this SLA is breached by the `canaryPackage`.

---

##### `enableCanary`<sup>Optional</sup> <a name="enableCanary" id="construct-hub.sources.NpmJsProps.property.enableCanary"></a>

```typescript
public readonly enableCanary: boolean;
```

- *Type:* boolean
- *Default:* true

Registers a package canary, which will track availability of a canary package in ConstructHub, and emit dedicated metrics.

---

##### `stagingBucket`<sup>Optional</sup> <a name="stagingBucket" id="construct-hub.sources.NpmJsProps.property.stagingBucket"></a>

```typescript
public readonly stagingBucket: IBucket;
```

- *Type:* @aws-cdk/aws-s3.IBucket
- *Default:* a new bucket will be created.

The bucket to use for staging npm packages.

---

### PackageLinkConfig <a name="PackageLinkConfig" id="construct-hub.PackageLinkConfig"></a>

#### Initializer <a name="Initializer" id="construct-hub.PackageLinkConfig.Initializer"></a>

```typescript
import { PackageLinkConfig } from 'construct-hub'

const packageLinkConfig: PackageLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageLinkConfig.property.configKey">configKey</a></code> | <code>string</code> | The location of the value inside the constructHub.packageLinks key of a module's package.json. |
| <code><a href="#construct-hub.PackageLinkConfig.property.linkLabel">linkLabel</a></code> | <code>string</code> | The name of the link, appears before the ":" on the website. |
| <code><a href="#construct-hub.PackageLinkConfig.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | allowList of domains for this link. |
| <code><a href="#construct-hub.PackageLinkConfig.property.linkText">linkText</a></code> | <code>string</code> | optional text to display as the hyperlink text. |

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="construct-hub.PackageLinkConfig.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

The location of the value inside the constructHub.packageLinks key of a module's package.json.

---

##### `linkLabel`<sup>Required</sup> <a name="linkLabel" id="construct-hub.PackageLinkConfig.property.linkLabel"></a>

```typescript
public readonly linkLabel: string;
```

- *Type:* string

The name of the link, appears before the ":" on the website.

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="construct-hub.PackageLinkConfig.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]
- *Default:* all domains allowed

allowList of domains for this link.

---

##### `linkText`<sup>Optional</sup> <a name="linkText" id="construct-hub.PackageLinkConfig.property.linkText"></a>

```typescript
public readonly linkText: string;
```

- *Type:* string
- *Default:* the url of the link

optional text to display as the hyperlink text.

---

### PackageSourceBindOptions <a name="PackageSourceBindOptions" id="construct-hub.PackageSourceBindOptions"></a>

Options for binding a package source.

#### Initializer <a name="Initializer" id="construct-hub.PackageSourceBindOptions.Initializer"></a>

```typescript
import { PackageSourceBindOptions } from 'construct-hub'

const packageSourceBindOptions: PackageSourceBindOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageSourceBindOptions.property.baseUrl">baseUrl</a></code> | <code>string</code> | The base URL of the bound ConstructHub instance. |
| <code><a href="#construct-hub.PackageSourceBindOptions.property.ingestion">ingestion</a></code> | <code>@aws-cdk/aws-iam.IGrantable</code> | The `IGrantable` that will process downstream messages from the bound package source. |
| <code><a href="#construct-hub.PackageSourceBindOptions.property.licenseList">licenseList</a></code> | <code><a href="#construct-hub.ILicenseList">ILicenseList</a></code> | The license list applied by the bound Construct Hub instance. |
| <code><a href="#construct-hub.PackageSourceBindOptions.property.monitoring">monitoring</a></code> | <code><a href="#construct-hub.IMonitoring">IMonitoring</a></code> | The monitoring instance to use for registering alarms, etc. |
| <code><a href="#construct-hub.PackageSourceBindOptions.property.queue">queue</a></code> | <code>@aws-cdk/aws-sqs.IQueue</code> | The SQS queue to which messages should be sent. |
| <code><a href="#construct-hub.PackageSourceBindOptions.property.denyList">denyList</a></code> | <code><a href="#construct-hub.IDenyList">IDenyList</a></code> | The configured `DenyList` for the bound Construct Hub instance, if any. |
| <code><a href="#construct-hub.PackageSourceBindOptions.property.repository">repository</a></code> | <code><a href="#construct-hub.IRepository">IRepository</a></code> | The CodeArtifact repository that is internally used by ConstructHub. |

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="construct-hub.PackageSourceBindOptions.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

The base URL of the bound ConstructHub instance.

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="construct-hub.PackageSourceBindOptions.property.ingestion"></a>

```typescript
public readonly ingestion: IGrantable;
```

- *Type:* @aws-cdk/aws-iam.IGrantable

The `IGrantable` that will process downstream messages from the bound package source.

It needs to be granted permissions to read package data from the URLs sent to the `queue`.

---

##### `licenseList`<sup>Required</sup> <a name="licenseList" id="construct-hub.PackageSourceBindOptions.property.licenseList"></a>

```typescript
public readonly licenseList: ILicenseList;
```

- *Type:* <a href="#construct-hub.ILicenseList">ILicenseList</a>

The license list applied by the bound Construct Hub instance.

This can be used to filter down the package only to those which will pass the license filter.

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="construct-hub.PackageSourceBindOptions.property.monitoring"></a>

```typescript
public readonly monitoring: IMonitoring;
```

- *Type:* <a href="#construct-hub.IMonitoring">IMonitoring</a>

The monitoring instance to use for registering alarms, etc.

---

##### `queue`<sup>Required</sup> <a name="queue" id="construct-hub.PackageSourceBindOptions.property.queue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* @aws-cdk/aws-sqs.IQueue

The SQS queue to which messages should be sent.

Sent objects should match the package discovery schema.

---

##### `denyList`<sup>Optional</sup> <a name="denyList" id="construct-hub.PackageSourceBindOptions.property.denyList"></a>

```typescript
public readonly denyList: IDenyList;
```

- *Type:* <a href="#construct-hub.IDenyList">IDenyList</a>

The configured `DenyList` for the bound Construct Hub instance, if any.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="construct-hub.PackageSourceBindOptions.property.repository"></a>

```typescript
public readonly repository: IRepository;
```

- *Type:* <a href="#construct-hub.IRepository">IRepository</a>

The CodeArtifact repository that is internally used by ConstructHub.

This may be undefined if no CodeArtifact repository is internally used.

---

### PackageSourceBindResult <a name="PackageSourceBindResult" id="construct-hub.PackageSourceBindResult"></a>

The result of binding a package source.

#### Initializer <a name="Initializer" id="construct-hub.PackageSourceBindResult.Initializer"></a>

```typescript
import { PackageSourceBindResult } from 'construct-hub'

const packageSourceBindResult: PackageSourceBindResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageSourceBindResult.property.dashboardWidgets">dashboardWidgets</a></code> | <code>@aws-cdk/aws-cloudwatch.IWidget[][]</code> | Widgets to add to the operator dashbaord for monitoring the health of the bound package source. |
| <code><a href="#construct-hub.PackageSourceBindResult.property.name">name</a></code> | <code>string</code> | The name of the bound package source. |
| <code><a href="#construct-hub.PackageSourceBindResult.property.links">links</a></code> | <code><a href="#construct-hub.LinkedResource">LinkedResource</a>[]</code> | An optional list of linked resources to be displayed on the monitoring dashboard. |

---

##### `dashboardWidgets`<sup>Required</sup> <a name="dashboardWidgets" id="construct-hub.PackageSourceBindResult.property.dashboardWidgets"></a>

```typescript
public readonly dashboardWidgets: IWidget[][];
```

- *Type:* @aws-cdk/aws-cloudwatch.IWidget[][]

Widgets to add to the operator dashbaord for monitoring the health of the bound package source.

It is not necessary for this list of widgets to include a title section (this will be added automatically). One array represents a row of widgets on the dashboard.

---

##### `name`<sup>Required</sup> <a name="name" id="construct-hub.PackageSourceBindResult.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the bound package source.

It will be used to render operator dashboards (so it should be a meaningful identification of the source).

---

##### `links`<sup>Optional</sup> <a name="links" id="construct-hub.PackageSourceBindResult.property.links"></a>

```typescript
public readonly links: LinkedResource[];
```

- *Type:* <a href="#construct-hub.LinkedResource">LinkedResource</a>[]

An optional list of linked resources to be displayed on the monitoring dashboard.

---

### PackageTag <a name="PackageTag" id="construct-hub.PackageTag"></a>

Configuration for applying custom tags to relevant packages.

Custom tags are displayed on the package details page, and can be used for searching.

#### Initializer <a name="Initializer" id="construct-hub.PackageTag.Initializer"></a>

```typescript
import { PackageTag } from 'construct-hub'

const packageTag: PackageTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageTag.property.id">id</a></code> | <code>string</code> | Identifier for tag, used for search. |
| <code><a href="#construct-hub.PackageTag.property.highlight">highlight</a></code> | <code><a href="#construct-hub.Highlight">Highlight</a></code> | Configuration for higlighting tag on package card. |
| <code><a href="#construct-hub.PackageTag.property.keyword">keyword</a></code> | <code><a href="#construct-hub.Keyword">Keyword</a></code> | Configuration for showing tag as keyword. |
| <code><a href="#construct-hub.PackageTag.property.searchFilter">searchFilter</a></code> | <code><a href="#construct-hub.SearchFilter">SearchFilter</a></code> | Configuration for showing tag as search filter. |
| <code><a href="#construct-hub.PackageTag.property.condition">condition</a></code> | <code><a href="#construct-hub.TagCondition">TagCondition</a></code> | The description of the logic that dictates whether the package has the tag applied. |

---

##### `id`<sup>Required</sup> <a name="id" id="construct-hub.PackageTag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Identifier for tag, used for search.

Must be unique amongst tags.

---

##### `highlight`<sup>Optional</sup> <a name="highlight" id="construct-hub.PackageTag.property.highlight"></a>

```typescript
public readonly highlight: Highlight;
```

- *Type:* <a href="#construct-hub.Highlight">Highlight</a>
- *Default:* don't highlight tag

Configuration for higlighting tag on package card.

---

##### `keyword`<sup>Optional</sup> <a name="keyword" id="construct-hub.PackageTag.property.keyword"></a>

```typescript
public readonly keyword: Keyword;
```

- *Type:* <a href="#construct-hub.Keyword">Keyword</a>
- *Default:* don't show tag in keyword list

Configuration for showing tag as keyword.

---

##### `searchFilter`<sup>Optional</sup> <a name="searchFilter" id="construct-hub.PackageTag.property.searchFilter"></a>

```typescript
public readonly searchFilter: SearchFilter;
```

- *Type:* <a href="#construct-hub.SearchFilter">SearchFilter</a>
- *Default:* don't show tag in search filters

Configuration for showing tag as search filter.

---

##### `condition`<sup>Required</sup> <a name="condition" id="construct-hub.PackageTag.property.condition"></a>

```typescript
public readonly condition: TagCondition;
```

- *Type:* <a href="#construct-hub.TagCondition">TagCondition</a>

The description of the logic that dictates whether the package has the tag applied.

---

### PackageTagBase <a name="PackageTagBase" id="construct-hub.PackageTagBase"></a>

#### Initializer <a name="Initializer" id="construct-hub.PackageTagBase.Initializer"></a>

```typescript
import { PackageTagBase } from 'construct-hub'

const packageTagBase: PackageTagBase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageTagBase.property.id">id</a></code> | <code>string</code> | Identifier for tag, used for search. |
| <code><a href="#construct-hub.PackageTagBase.property.highlight">highlight</a></code> | <code><a href="#construct-hub.Highlight">Highlight</a></code> | Configuration for higlighting tag on package card. |
| <code><a href="#construct-hub.PackageTagBase.property.keyword">keyword</a></code> | <code><a href="#construct-hub.Keyword">Keyword</a></code> | Configuration for showing tag as keyword. |
| <code><a href="#construct-hub.PackageTagBase.property.searchFilter">searchFilter</a></code> | <code><a href="#construct-hub.SearchFilter">SearchFilter</a></code> | Configuration for showing tag as search filter. |

---

##### `id`<sup>Required</sup> <a name="id" id="construct-hub.PackageTagBase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Identifier for tag, used for search.

Must be unique amongst tags.

---

##### `highlight`<sup>Optional</sup> <a name="highlight" id="construct-hub.PackageTagBase.property.highlight"></a>

```typescript
public readonly highlight: Highlight;
```

- *Type:* <a href="#construct-hub.Highlight">Highlight</a>
- *Default:* don't highlight tag

Configuration for higlighting tag on package card.

---

##### `keyword`<sup>Optional</sup> <a name="keyword" id="construct-hub.PackageTagBase.property.keyword"></a>

```typescript
public readonly keyword: Keyword;
```

- *Type:* <a href="#construct-hub.Keyword">Keyword</a>
- *Default:* don't show tag in keyword list

Configuration for showing tag as keyword.

---

##### `searchFilter`<sup>Optional</sup> <a name="searchFilter" id="construct-hub.PackageTagBase.property.searchFilter"></a>

```typescript
public readonly searchFilter: SearchFilter;
```

- *Type:* <a href="#construct-hub.SearchFilter">SearchFilter</a>
- *Default:* don't show tag in search filters

Configuration for showing tag as search filter.

---

### PackageTagConfig <a name="PackageTagConfig" id="construct-hub.PackageTagConfig"></a>

Serialized tag declaration to be passed to lambdas via environment variables.

#### Initializer <a name="Initializer" id="construct-hub.PackageTagConfig.Initializer"></a>

```typescript
import { PackageTagConfig } from 'construct-hub'

const packageTagConfig: PackageTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageTagConfig.property.id">id</a></code> | <code>string</code> | Identifier for tag, used for search. |
| <code><a href="#construct-hub.PackageTagConfig.property.highlight">highlight</a></code> | <code><a href="#construct-hub.Highlight">Highlight</a></code> | Configuration for higlighting tag on package card. |
| <code><a href="#construct-hub.PackageTagConfig.property.keyword">keyword</a></code> | <code><a href="#construct-hub.Keyword">Keyword</a></code> | Configuration for showing tag as keyword. |
| <code><a href="#construct-hub.PackageTagConfig.property.searchFilter">searchFilter</a></code> | <code><a href="#construct-hub.SearchFilter">SearchFilter</a></code> | Configuration for showing tag as search filter. |
| <code><a href="#construct-hub.PackageTagConfig.property.condition">condition</a></code> | <code><a href="#construct-hub.TagConditionConfig">TagConditionConfig</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="construct-hub.PackageTagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Identifier for tag, used for search.

Must be unique amongst tags.

---

##### `highlight`<sup>Optional</sup> <a name="highlight" id="construct-hub.PackageTagConfig.property.highlight"></a>

```typescript
public readonly highlight: Highlight;
```

- *Type:* <a href="#construct-hub.Highlight">Highlight</a>
- *Default:* don't highlight tag

Configuration for higlighting tag on package card.

---

##### `keyword`<sup>Optional</sup> <a name="keyword" id="construct-hub.PackageTagConfig.property.keyword"></a>

```typescript
public readonly keyword: Keyword;
```

- *Type:* <a href="#construct-hub.Keyword">Keyword</a>
- *Default:* don't show tag in keyword list

Configuration for showing tag as keyword.

---

##### `searchFilter`<sup>Optional</sup> <a name="searchFilter" id="construct-hub.PackageTagConfig.property.searchFilter"></a>

```typescript
public readonly searchFilter: SearchFilter;
```

- *Type:* <a href="#construct-hub.SearchFilter">SearchFilter</a>
- *Default:* don't show tag in search filters

Configuration for showing tag as search filter.

---

##### `condition`<sup>Required</sup> <a name="condition" id="construct-hub.PackageTagConfig.property.condition"></a>

```typescript
public readonly condition: TagConditionConfig;
```

- *Type:* <a href="#construct-hub.TagConditionConfig">TagConditionConfig</a>

---

### PackageTagGroupConfig <a name="PackageTagGroupConfig" id="construct-hub.PackageTagGroupConfig"></a>

#### Initializer <a name="Initializer" id="construct-hub.PackageTagGroupConfig.Initializer"></a>

```typescript
import { PackageTagGroupConfig } from 'construct-hub'

const packageTagGroupConfig: PackageTagGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageTagGroupConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#construct-hub.PackageTagGroupConfig.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#construct-hub.PackageTagGroupConfig.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#construct-hub.PackageTagGroupConfig.property.tooltip">tooltip</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="construct-hub.PackageTagGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="construct-hub.PackageTagGroupConfig.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `label`<sup>Optional</sup> <a name="label" id="construct-hub.PackageTagGroupConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `tooltip`<sup>Optional</sup> <a name="tooltip" id="construct-hub.PackageTagGroupConfig.property.tooltip"></a>

```typescript
public readonly tooltip: string;
```

- *Type:* string

---

### PackageTagGroupProps <a name="PackageTagGroupProps" id="construct-hub.PackageTagGroupProps"></a>

#### Initializer <a name="Initializer" id="construct-hub.PackageTagGroupProps.Initializer"></a>

```typescript
import { PackageTagGroupProps } from 'construct-hub'

const packageTagGroupProps: PackageTagGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageTagGroupProps.property.filterType">filterType</a></code> | <code><a href="#construct-hub.FilterType">FilterType</a></code> | Allows to specify the group filter type. |
| <code><a href="#construct-hub.PackageTagGroupProps.property.label">label</a></code> | <code>string</code> | Group label to display. |
| <code><a href="#construct-hub.PackageTagGroupProps.property.tooltip">tooltip</a></code> | <code>string</code> | Optional message to show within a tooltip next to the filter label. |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="construct-hub.PackageTagGroupProps.property.filterType"></a>

```typescript
public readonly filterType: FilterType;
```

- *Type:* <a href="#construct-hub.FilterType">FilterType</a>

Allows to specify the group filter type.

Defaults to checkbox if not specified

---

##### `label`<sup>Optional</sup> <a name="label" id="construct-hub.PackageTagGroupProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Group label to display.

Falls back to id if not provided

---

##### `tooltip`<sup>Optional</sup> <a name="tooltip" id="construct-hub.PackageTagGroupProps.property.tooltip"></a>

```typescript
public readonly tooltip: string;
```

- *Type:* string

Optional message to show within a tooltip next to the filter label.

---

### S3StorageFactoryProps <a name="S3StorageFactoryProps" id="construct-hub.S3StorageFactoryProps"></a>

Properties for `S3StorageFactory`.

#### Initializer <a name="Initializer" id="construct-hub.S3StorageFactoryProps.Initializer"></a>

```typescript
import { S3StorageFactoryProps } from 'construct-hub'

const s3StorageFactoryProps: S3StorageFactoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.S3StorageFactoryProps.property.failover">failover</a></code> | <code>boolean</code> | When enabled, the factory will return the failover buckets instead of the primary. |

---

##### `failover`<sup>Optional</sup> <a name="failover" id="construct-hub.S3StorageFactoryProps.property.failover"></a>

```typescript
public readonly failover: boolean;
```

- *Type:* boolean
- *Default:* false

When enabled, the factory will return the failover buckets instead of the primary.

---

### SearchFilter <a name="SearchFilter" id="construct-hub.SearchFilter"></a>

#### Initializer <a name="Initializer" id="construct-hub.SearchFilter.Initializer"></a>

```typescript
import { SearchFilter } from 'construct-hub'

const searchFilter: SearchFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.SearchFilter.property.display">display</a></code> | <code>string</code> | Display name for filter. |
| <code><a href="#construct-hub.SearchFilter.property.group">group</a></code> | <code><a href="#construct-hub.PackageTagGroup">PackageTagGroup</a></code> | PackageTagGroup to include filter in. |
| <code><a href="#construct-hub.SearchFilter.property.groupBy">groupBy</a></code> | <code>string</code> | Name of group to include filter in. |

---

##### `display`<sup>Required</sup> <a name="display" id="construct-hub.SearchFilter.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Display name for filter.

---

##### `group`<sup>Optional</sup> <a name="group" id="construct-hub.SearchFilter.property.group"></a>

```typescript
public readonly group: PackageTagGroup;
```

- *Type:* <a href="#construct-hub.PackageTagGroup">PackageTagGroup</a>

PackageTagGroup to include filter in.

---

##### ~~`groupBy`~~<sup>Optional</sup> <a name="groupBy" id="construct-hub.SearchFilter.property.groupBy"></a>

- *Deprecated:* use `group` instead

```typescript
public readonly groupBy: string;
```

- *Type:* string

Name of group to include filter in.

---

### TagConditionConfig <a name="TagConditionConfig" id="construct-hub.TagConditionConfig"></a>

Serialized config for a tag condition.

#### Initializer <a name="Initializer" id="construct-hub.TagConditionConfig.Initializer"></a>

```typescript
import { TagConditionConfig } from 'construct-hub'

const tagConditionConfig: TagConditionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.TagConditionConfig.property.type">type</a></code> | <code><a href="#construct-hub.TagConditionLogicType">TagConditionLogicType</a></code> | *No description.* |
| <code><a href="#construct-hub.TagConditionConfig.property.children">children</a></code> | <code><a href="#construct-hub.TagConditionConfig">TagConditionConfig</a>[]</code> | *No description.* |
| <code><a href="#construct-hub.TagConditionConfig.property.key">key</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#construct-hub.TagConditionConfig.property.options">options</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#construct-hub.TagConditionConfig.property.source">source</a></code> | <code><a href="#construct-hub.TagConditionSource">TagConditionSource</a></code> | *No description.* |
| <code><a href="#construct-hub.TagConditionConfig.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="construct-hub.TagConditionConfig.property.type"></a>

```typescript
public readonly type: TagConditionLogicType;
```

- *Type:* <a href="#construct-hub.TagConditionLogicType">TagConditionLogicType</a>

---

##### `children`<sup>Optional</sup> <a name="children" id="construct-hub.TagConditionConfig.property.children"></a>

```typescript
public readonly children: TagConditionConfig[];
```

- *Type:* <a href="#construct-hub.TagConditionConfig">TagConditionConfig</a>[]

---

##### `key`<sup>Optional</sup> <a name="key" id="construct-hub.TagConditionConfig.property.key"></a>

```typescript
public readonly key: string[];
```

- *Type:* string[]

---

##### `options`<sup>Optional</sup> <a name="options" id="construct-hub.TagConditionConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `source`<sup>Optional</sup> <a name="source" id="construct-hub.TagConditionConfig.property.source"></a>

```typescript
public readonly source: TagConditionSource;
```

- *Type:* <a href="#construct-hub.TagConditionSource">TagConditionSource</a>

---

##### `value`<sup>Optional</sup> <a name="value" id="construct-hub.TagConditionConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### TagConditionIncludesOptions <a name="TagConditionIncludesOptions" id="construct-hub.TagConditionIncludesOptions"></a>

Options for `includes` operator.

#### Initializer <a name="Initializer" id="construct-hub.TagConditionIncludesOptions.Initializer"></a>

```typescript
import { TagConditionIncludesOptions } from 'construct-hub'

const tagConditionIncludesOptions: TagConditionIncludesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.TagConditionIncludesOptions.property.atLeast">atLeast</a></code> | <code>number</code> | The value must appear at least this many times. |
| <code><a href="#construct-hub.TagConditionIncludesOptions.property.caseSensitive">caseSensitive</a></code> | <code>boolean</code> | String matches must match the casing of the original string. |

---

##### `atLeast`<sup>Optional</sup> <a name="atLeast" id="construct-hub.TagConditionIncludesOptions.property.atLeast"></a>

```typescript
public readonly atLeast: number;
```

- *Type:* number
- *Default:* 1

The value must appear at least this many times.

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="construct-hub.TagConditionIncludesOptions.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean;
```

- *Type:* boolean
- *Default:* false

String matches must match the casing of the original string.

This option is ignored if the value we are checking is an array.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeArtifact <a name="CodeArtifact" id="construct-hub.sources.CodeArtifact"></a>

- *Implements:* <a href="#construct-hub.IPackageSource">IPackageSource</a>

A package source that obtains package data from an npm CodeArtifact repository.

#### Initializers <a name="Initializers" id="construct-hub.sources.CodeArtifact.Initializer"></a>

```typescript
import { sources } from 'construct-hub'

new sources.CodeArtifact(props: CodeArtifactProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.sources.CodeArtifact.Initializer.parameter.props">props</a></code> | <code>construct-hub.sources.CodeArtifactProps</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="construct-hub.sources.CodeArtifact.Initializer.parameter.props"></a>

- *Type:* construct-hub.sources.CodeArtifactProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.sources.CodeArtifact.bind">bind</a></code> | Binds the package source to a scope and target queue. |
| <code><a href="#construct-hub.sources.CodeArtifact.metricDeletedCount">metricDeletedCount</a></code> | The number of package versions that were deleted from CodeArtifact (those events are not handled currently). |
| <code><a href="#construct-hub.sources.CodeArtifact.metricDenyListedCount">metricDenyListedCount</a></code> | The count of package versions that were ignored due to being in the deny list. |
| <code><a href="#construct-hub.sources.CodeArtifact.metricIneligibleLicense">metricIneligibleLicense</a></code> | The number of package versions that were ignored due to using an ineloigible license. |
| <code><a href="#construct-hub.sources.CodeArtifact.metricNotJsiiEnabledCount">metricNotJsiiEnabledCount</a></code> | The number of package versions that do not have a jsii assembly in the package. |

---

##### `bind` <a name="bind" id="construct-hub.sources.CodeArtifact.bind"></a>

```typescript
public bind(scope: Construct, __1: PackageSourceBindOptions): PackageSourceBindResult
```

Binds the package source to a scope and target queue.

###### `scope`<sup>Required</sup> <a name="scope" id="construct-hub.sources.CodeArtifact.bind.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

###### `__1`<sup>Required</sup> <a name="__1" id="construct-hub.sources.CodeArtifact.bind.parameter.__1"></a>

- *Type:* <a href="#construct-hub.PackageSourceBindOptions">PackageSourceBindOptions</a>

---

##### `metricDeletedCount` <a name="metricDeletedCount" id="construct-hub.sources.CodeArtifact.metricDeletedCount"></a>

```typescript
public metricDeletedCount(opts?: MetricOptions): Metric
```

The number of package versions that were deleted from CodeArtifact (those events are not handled currently).

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.CodeArtifact.metricDeletedCount.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricDenyListedCount` <a name="metricDenyListedCount" id="construct-hub.sources.CodeArtifact.metricDenyListedCount"></a>

```typescript
public metricDenyListedCount(opts?: MetricOptions): Metric
```

The count of package versions that were ignored due to being in the deny list.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.CodeArtifact.metricDenyListedCount.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricIneligibleLicense` <a name="metricIneligibleLicense" id="construct-hub.sources.CodeArtifact.metricIneligibleLicense"></a>

```typescript
public metricIneligibleLicense(opts?: MetricOptions): Metric
```

The number of package versions that were ignored due to using an ineloigible license.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.CodeArtifact.metricIneligibleLicense.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricNotJsiiEnabledCount` <a name="metricNotJsiiEnabledCount" id="construct-hub.sources.CodeArtifact.metricNotJsiiEnabledCount"></a>

```typescript
public metricNotJsiiEnabledCount(opts?: MetricOptions): Metric
```

The number of package versions that do not have a jsii assembly in the package.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.CodeArtifact.metricNotJsiiEnabledCount.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---




### FilterType <a name="FilterType" id="construct-hub.FilterType"></a>

#### Initializers <a name="Initializers" id="construct-hub.FilterType.Initializer"></a>

```typescript
import { FilterType } from 'construct-hub'

new FilterType()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.FilterType.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="construct-hub.FilterType.bind"></a>

```typescript
public bind(): FilterTypeValue
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.FilterType.checkbox">checkbox</a></code> | *No description.* |
| <code><a href="#construct-hub.FilterType.radio">radio</a></code> | *No description.* |

---

##### `checkbox` <a name="checkbox" id="construct-hub.FilterType.checkbox"></a>

```typescript
import { FilterType } from 'construct-hub'

FilterType.checkbox()
```

##### `radio` <a name="radio" id="construct-hub.FilterType.radio"></a>

```typescript
import { FilterType } from 'construct-hub'

FilterType.radio()
```



### NpmJs <a name="NpmJs" id="construct-hub.sources.NpmJs"></a>

- *Implements:* <a href="#construct-hub.IPackageSource">IPackageSource</a>

A package source that gets package data from the npmjs.com package registry.

#### Initializers <a name="Initializers" id="construct-hub.sources.NpmJs.Initializer"></a>

```typescript
import { sources } from 'construct-hub'

new sources.NpmJs(props?: NpmJsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.sources.NpmJs.Initializer.parameter.props">props</a></code> | <code>construct-hub.sources.NpmJsProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="construct-hub.sources.NpmJs.Initializer.parameter.props"></a>

- *Type:* construct-hub.sources.NpmJsProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.sources.NpmJs.bind">bind</a></code> | Binds the package source to a scope and target queue. |
| <code><a href="#construct-hub.sources.NpmJs.metricBatchProcessingTime">metricBatchProcessingTime</a></code> | The average time it took to process a changes batch. |
| <code><a href="#construct-hub.sources.NpmJs.metricChangeCount">metricChangeCount</a></code> | The total count of changes that were processed. |
| <code><a href="#construct-hub.sources.NpmJs.metricLastSeq">metricLastSeq</a></code> | The last sequence number that was processed. |
| <code><a href="#construct-hub.sources.NpmJs.metricNpmJsChangeAge">metricNpmJsChangeAge</a></code> | *No description.* |
| <code><a href="#construct-hub.sources.NpmJs.metricPackageVersionAge">metricPackageVersionAge</a></code> | The age of the oldest package version that was processed. |
| <code><a href="#construct-hub.sources.NpmJs.metricPackageVersionCount">metricPackageVersionCount</a></code> | The total count of package versions that were inspected. |
| <code><a href="#construct-hub.sources.NpmJs.metricRelevantPackageVersions">metricRelevantPackageVersions</a></code> | The total count of package versions that were deemed relevant. |
| <code><a href="#construct-hub.sources.NpmJs.metricRemainingTime">metricRemainingTime</a></code> | The amount of time that was remaining when the lambda returned in order to avoid hitting a timeout. |
| <code><a href="#construct-hub.sources.NpmJs.metricUnprocessableEntity">metricUnprocessableEntity</a></code> | The amount of changes that were not processed due to having an invalid format. |

---

##### `bind` <a name="bind" id="construct-hub.sources.NpmJs.bind"></a>

```typescript
public bind(scope: Construct, __1: PackageSourceBindOptions): PackageSourceBindResult
```

Binds the package source to a scope and target queue.

###### `scope`<sup>Required</sup> <a name="scope" id="construct-hub.sources.NpmJs.bind.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

###### `__1`<sup>Required</sup> <a name="__1" id="construct-hub.sources.NpmJs.bind.parameter.__1"></a>

- *Type:* <a href="#construct-hub.PackageSourceBindOptions">PackageSourceBindOptions</a>

---

##### `metricBatchProcessingTime` <a name="metricBatchProcessingTime" id="construct-hub.sources.NpmJs.metricBatchProcessingTime"></a>

```typescript
public metricBatchProcessingTime(opts?: MetricOptions): Metric
```

The average time it took to process a changes batch.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.NpmJs.metricBatchProcessingTime.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricChangeCount` <a name="metricChangeCount" id="construct-hub.sources.NpmJs.metricChangeCount"></a>

```typescript
public metricChangeCount(opts?: MetricOptions): Metric
```

The total count of changes that were processed.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.NpmJs.metricChangeCount.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricLastSeq` <a name="metricLastSeq" id="construct-hub.sources.NpmJs.metricLastSeq"></a>

```typescript
public metricLastSeq(opts?: MetricOptions): Metric
```

The last sequence number that was processed.

This metric can be used to discover when a sequence reset has happened in the CouchDB instance.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.NpmJs.metricLastSeq.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricNpmJsChangeAge` <a name="metricNpmJsChangeAge" id="construct-hub.sources.NpmJs.metricNpmJsChangeAge"></a>

```typescript
public metricNpmJsChangeAge(opts?: MetricOptions): Metric
```

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.NpmJs.metricNpmJsChangeAge.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricPackageVersionAge` <a name="metricPackageVersionAge" id="construct-hub.sources.NpmJs.metricPackageVersionAge"></a>

```typescript
public metricPackageVersionAge(opts?: MetricOptions): Metric
```

The age of the oldest package version that was processed.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.NpmJs.metricPackageVersionAge.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricPackageVersionCount` <a name="metricPackageVersionCount" id="construct-hub.sources.NpmJs.metricPackageVersionCount"></a>

```typescript
public metricPackageVersionCount(opts?: MetricOptions): Metric
```

The total count of package versions that were inspected.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.NpmJs.metricPackageVersionCount.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricRelevantPackageVersions` <a name="metricRelevantPackageVersions" id="construct-hub.sources.NpmJs.metricRelevantPackageVersions"></a>

```typescript
public metricRelevantPackageVersions(opts?: MetricOptions): Metric
```

The total count of package versions that were deemed relevant.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.NpmJs.metricRelevantPackageVersions.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricRemainingTime` <a name="metricRemainingTime" id="construct-hub.sources.NpmJs.metricRemainingTime"></a>

```typescript
public metricRemainingTime(opts?: MetricOptions): Metric
```

The amount of time that was remaining when the lambda returned in order to avoid hitting a timeout.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.NpmJs.metricRemainingTime.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---

##### `metricUnprocessableEntity` <a name="metricUnprocessableEntity" id="construct-hub.sources.NpmJs.metricUnprocessableEntity"></a>

```typescript
public metricUnprocessableEntity(opts?: MetricOptions): Metric
```

The amount of changes that were not processed due to having an invalid format.

###### `opts`<sup>Optional</sup> <a name="opts" id="construct-hub.sources.NpmJs.metricUnprocessableEntity.parameter.opts"></a>

- *Type:* @aws-cdk/aws-cloudwatch.MetricOptions

---




### PackageTagGroup <a name="PackageTagGroup" id="construct-hub.PackageTagGroup"></a>

Defines a custom package tag group.

#### Initializers <a name="Initializers" id="construct-hub.PackageTagGroup.Initializer"></a>

```typescript
import { PackageTagGroup } from 'construct-hub'

new PackageTagGroup(id: string, props?: PackageTagGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageTagGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#construct-hub.PackageTagGroup.Initializer.parameter.props">props</a></code> | <code><a href="#construct-hub.PackageTagGroupProps">PackageTagGroupProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="construct-hub.PackageTagGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="construct-hub.PackageTagGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#construct-hub.PackageTagGroupProps">PackageTagGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.PackageTagGroup.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="construct-hub.PackageTagGroup.bind"></a>

```typescript
public bind(): PackageTagGroupConfig
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PackageTagGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#construct-hub.PackageTagGroup.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#construct-hub.PackageTagGroup.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#construct-hub.PackageTagGroup.property.tooltip">tooltip</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="construct-hub.PackageTagGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="construct-hub.PackageTagGroup.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `label`<sup>Optional</sup> <a name="label" id="construct-hub.PackageTagGroup.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `tooltip`<sup>Optional</sup> <a name="tooltip" id="construct-hub.PackageTagGroup.property.tooltip"></a>

```typescript
public readonly tooltip: string;
```

- *Type:* string

---


### PreloadFile <a name="PreloadFile" id="construct-hub.PreloadFile"></a>

Represents a javascript file to load before the webapp.

This can allow operators to add their own client monitors or analytics if they wish

#### Initializers <a name="Initializers" id="construct-hub.PreloadFile.Initializer"></a>

```typescript
import { PreloadFile } from 'construct-hub'

new PreloadFile(data: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.PreloadFile.Initializer.parameter.data">data</a></code> | <code>string</code> | *No description.* |

---

##### `data`<sup>Required</sup> <a name="data" id="construct-hub.PreloadFile.Initializer.parameter.data"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.PreloadFile.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="construct-hub.PreloadFile.bind"></a>

```typescript
public bind(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.PreloadFile.fromCode">fromCode</a></code> | Creates a PreloadFile instance directly from source code. |
| <code><a href="#construct-hub.PreloadFile.fromFile">fromFile</a></code> | Creates a PreloadFile instance from a filepath to load. |

---

##### `fromCode` <a name="fromCode" id="construct-hub.PreloadFile.fromCode"></a>

```typescript
import { PreloadFile } from 'construct-hub'

PreloadFile.fromCode(code: string)
```

Creates a PreloadFile instance directly from source code.

###### `code`<sup>Required</sup> <a name="code" id="construct-hub.PreloadFile.fromCode.parameter.code"></a>

- *Type:* string

---

##### `fromFile` <a name="fromFile" id="construct-hub.PreloadFile.fromFile"></a>

```typescript
import { PreloadFile } from 'construct-hub'

PreloadFile.fromFile(path: string)
```

Creates a PreloadFile instance from a filepath to load.

###### `path`<sup>Required</sup> <a name="path" id="construct-hub.PreloadFile.fromFile.parameter.path"></a>

- *Type:* string

---



### SpdxLicense <a name="SpdxLicense" id="construct-hub.SpdxLicense"></a>

Valid SPDX License identifiers.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.SpdxLicense.all">all</a></code> | All valid SPDX Licenses. |
| <code><a href="#construct-hub.SpdxLicense.apache">apache</a></code> | The Apache family of licenses. |
| <code><a href="#construct-hub.SpdxLicense.bsd">bsd</a></code> | The BSD family of licenses. |
| <code><a href="#construct-hub.SpdxLicense.cddl">cddl</a></code> | The CDDL family of licenses. |
| <code><a href="#construct-hub.SpdxLicense.epl">epl</a></code> | The EPL family of licenses. |
| <code><a href="#construct-hub.SpdxLicense.mit">mit</a></code> | The MIT family of licenses. |
| <code><a href="#construct-hub.SpdxLicense.mpl">mpl</a></code> | The MPL family of licenses. |
| <code><a href="#construct-hub.SpdxLicense.osiApproved">osiApproved</a></code> | All OSI-Approved SPDX Licenses. |

---

##### `all` <a name="all" id="construct-hub.SpdxLicense.all"></a>

```typescript
import { SpdxLicense } from 'construct-hub'

SpdxLicense.all()
```

All valid SPDX Licenses.

##### `apache` <a name="apache" id="construct-hub.SpdxLicense.apache"></a>

```typescript
import { SpdxLicense } from 'construct-hub'

SpdxLicense.apache()
```

The Apache family of licenses.

##### `bsd` <a name="bsd" id="construct-hub.SpdxLicense.bsd"></a>

```typescript
import { SpdxLicense } from 'construct-hub'

SpdxLicense.bsd()
```

The BSD family of licenses.

##### `cddl` <a name="cddl" id="construct-hub.SpdxLicense.cddl"></a>

```typescript
import { SpdxLicense } from 'construct-hub'

SpdxLicense.cddl()
```

The CDDL family of licenses.

##### `epl` <a name="epl" id="construct-hub.SpdxLicense.epl"></a>

```typescript
import { SpdxLicense } from 'construct-hub'

SpdxLicense.epl()
```

The EPL family of licenses.

##### `mit` <a name="mit" id="construct-hub.SpdxLicense.mit"></a>

```typescript
import { SpdxLicense } from 'construct-hub'

SpdxLicense.mit()
```

The MIT family of licenses.

##### `mpl` <a name="mpl" id="construct-hub.SpdxLicense.mpl"></a>

```typescript
import { SpdxLicense } from 'construct-hub'

SpdxLicense.mpl()
```

The MPL family of licenses.

##### `osiApproved` <a name="osiApproved" id="construct-hub.SpdxLicense.osiApproved"></a>

```typescript
import { SpdxLicense } from 'construct-hub'

SpdxLicense.osiApproved()
```

All OSI-Approved SPDX Licenses.

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.SpdxLicense.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="construct-hub.SpdxLicense.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.SpdxLicense.property.AAL">AAL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Attribution Assurance License. |
| <code><a href="#construct-hub.SpdxLicense.property.ABSTYLES">ABSTYLES</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Abstyles License. |
| <code><a href="#construct-hub.SpdxLicense.property.ADOBE_2006">ADOBE_2006</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Adobe Systems Incorporated Source Code License Agreement. |
| <code><a href="#construct-hub.SpdxLicense.property.ADOBE_GLYPH">ADOBE_GLYPH</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Adobe Glyph List License. |
| <code><a href="#construct-hub.SpdxLicense.property.ADSL">ADSL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Amazon Digital Services License. |
| <code><a href="#construct-hub.SpdxLicense.property.AFL_1_1">AFL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Academic Free License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.AFL_1_2">AFL_1_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Academic Free License v1.2. |
| <code><a href="#construct-hub.SpdxLicense.property.AFL_2_0">AFL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Academic Free License v2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.AFL_2_1">AFL_2_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Academic Free License v2.1. |
| <code><a href="#construct-hub.SpdxLicense.property.AFL_3_0">AFL_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Academic Free License v3.0. |
| <code><a href="#construct-hub.SpdxLicense.property.AFMPARSE">AFMPARSE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Afmparse License. |
| <code><a href="#construct-hub.SpdxLicense.property.AGPL_1_0">AGPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Affero General Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.AGPL_1_0_ONLY">AGPL_1_0_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Affero General Public License v1.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.AGPL_1_0_OR_LATER">AGPL_1_0_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Affero General Public License v1.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.AGPL_3_0">AGPL_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Affero General Public License v3.0. |
| <code><a href="#construct-hub.SpdxLicense.property.AGPL_3_0_ONLY">AGPL_3_0_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Affero General Public License v3.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.AGPL_3_0_OR_LATER">AGPL_3_0_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Affero General Public License v3.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.ALADDIN">ALADDIN</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Aladdin Free Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.AMDPLPA">AMDPLPA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | AMD's plpa_map.c License. |
| <code><a href="#construct-hub.SpdxLicense.property.AML">AML</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Apple MIT License. |
| <code><a href="#construct-hub.SpdxLicense.property.AMPAS">AMPAS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Academy of Motion Picture Arts and Sciences BSD. |
| <code><a href="#construct-hub.SpdxLicense.property.ANTLR_PD">ANTLR_PD</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | ANTLR Software Rights Notice. |
| <code><a href="#construct-hub.SpdxLicense.property.ANTLR_PD_FALLBACK">ANTLR_PD_FALLBACK</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | ANTLR Software Rights Notice with license fallback. |
| <code><a href="#construct-hub.SpdxLicense.property.APACHE_1_0">APACHE_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Apache License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.APACHE_1_1">APACHE_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Apache License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.APACHE_2_0">APACHE_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Apache License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.APAFML">APAFML</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Adobe Postscript AFM License. |
| <code><a href="#construct-hub.SpdxLicense.property.APL_1_0">APL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Adaptive Public License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.APSL_1_0">APSL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Apple Public Source License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.APSL_1_1">APSL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Apple Public Source License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.APSL_1_2">APSL_1_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Apple Public Source License 1.2. |
| <code><a href="#construct-hub.SpdxLicense.property.APSL_2_0">APSL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Apple Public Source License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ARTISTIC_1_0">ARTISTIC_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Artistic License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ARTISTIC_1_0_CL8">ARTISTIC_1_0_CL8</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Artistic License 1.0 w/clause 8. |
| <code><a href="#construct-hub.SpdxLicense.property.ARTISTIC_1_0_PERL">ARTISTIC_1_0_PERL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Artistic License 1.0 (Perl). |
| <code><a href="#construct-hub.SpdxLicense.property.ARTISTIC_2_0">ARTISTIC_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Artistic License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.BAHYPH">BAHYPH</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Bahyph License. |
| <code><a href="#construct-hub.SpdxLicense.property.BARR">BARR</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Barr License. |
| <code><a href="#construct-hub.SpdxLicense.property.BEERWARE">BEERWARE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Beerware License. |
| <code><a href="#construct-hub.SpdxLicense.property.BITTORRENT_1_0">BITTORRENT_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BitTorrent Open Source License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.BITTORRENT_1_1">BITTORRENT_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BitTorrent Open Source License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.BLESSING">BLESSING</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SQLite Blessing. |
| <code><a href="#construct-hub.SpdxLicense.property.BLUEOAK_1_0_0">BLUEOAK_1_0_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Blue Oak Model License 1.0.0. |
| <code><a href="#construct-hub.SpdxLicense.property.BORCEUX">BORCEUX</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Borceux license. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_1_CLAUSE">BSD_1_CLAUSE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 1-Clause License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_2_CLAUSE">BSD_2_CLAUSE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 2-Clause "Simplified" License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_2_CLAUSE_FREEBSD">BSD_2_CLAUSE_FREEBSD</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 2-Clause FreeBSD License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_2_CLAUSE_NETBSD">BSD_2_CLAUSE_NETBSD</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 2-Clause NetBSD License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_2_CLAUSE_PATENT">BSD_2_CLAUSE_PATENT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD-2-Clause Plus Patent License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_2_CLAUSE_VIEWS">BSD_2_CLAUSE_VIEWS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 2-Clause with views sentence. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_3_CLAUSE">BSD_3_CLAUSE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 3-Clause "New" or "Revised" License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_3_CLAUSE_ATTRIBUTION">BSD_3_CLAUSE_ATTRIBUTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD with attribution. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_3_CLAUSE_CLEAR">BSD_3_CLAUSE_CLEAR</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 3-Clause Clear License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_3_CLAUSE_LBNL">BSD_3_CLAUSE_LBNL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Lawrence Berkeley National Labs BSD variant license. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE">BSD_3_CLAUSE_NO_NUCLEAR_LICENSE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 3-Clause No Nuclear License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014">BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 3-Clause No Nuclear License 2014. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY">BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 3-Clause No Nuclear Warranty. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_3_CLAUSE_OPEN_MPI">BSD_3_CLAUSE_OPEN_MPI</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 3-Clause Open MPI variant. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_4_CLAUSE">BSD_4_CLAUSE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD 4-Clause "Original" or "Old" License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_4_CLAUSE_UC">BSD_4_CLAUSE_UC</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD-4-Clause (University of California-Specific). |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_PROTECTION">BSD_PROTECTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD Protection License. |
| <code><a href="#construct-hub.SpdxLicense.property.BSD_SOURCE_CODE">BSD_SOURCE_CODE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD Source Code Attribution. |
| <code><a href="#construct-hub.SpdxLicense.property.BSL_1_0">BSL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Boost Software License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.BUSL_1_1">BUSL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Business Source License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.BZIP2_1_0_5">BZIP2_1_0_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | bzip2 and libbzip2 License v1.0.5. |
| <code><a href="#construct-hub.SpdxLicense.property.BZIP2_1_0_6">BZIP2_1_0_6</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | bzip2 and libbzip2 License v1.0.6. |
| <code><a href="#construct-hub.SpdxLicense.property.CAL_1_0">CAL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Cryptographic Autonomy License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.CAL_1_0_COMBINED_WORK_EXCEPTION">CAL_1_0_COMBINED_WORK_EXCEPTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Cryptographic Autonomy License 1.0 (Combined Work Exception). |
| <code><a href="#construct-hub.SpdxLicense.property.CALDERA">CALDERA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Caldera License. |
| <code><a href="#construct-hub.SpdxLicense.property.CATOSL_1_1">CATOSL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Computer Associates Trusted Open Source License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_1_0">CC_BY_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution 1.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_2_0">CC_BY_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution 2.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_2_5">CC_BY_2_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution 2.5 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_3_0">CC_BY_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution 3.0 Unported. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_3_0_AT">CC_BY_3_0_AT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution 3.0 Austria. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_3_0_US">CC_BY_3_0_US</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution 3.0 United States. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_4_0">CC_BY_4_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution 4.0 International. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_1_0">CC_BY_NC_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial 1.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_2_0">CC_BY_NC_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial 2.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_2_5">CC_BY_NC_2_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial 2.5 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_3_0">CC_BY_NC_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial 3.0 Unported. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_4_0">CC_BY_NC_4_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial 4.0 International. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_ND_1_0">CC_BY_NC_ND_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_ND_2_0">CC_BY_NC_ND_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_ND_2_5">CC_BY_NC_ND_2_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_ND_3_0">CC_BY_NC_ND_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_ND_3_0_IGO">CC_BY_NC_ND_3_0_IGO</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial No Derivatives 3.0 IGO. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_ND_4_0">CC_BY_NC_ND_4_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial No Derivatives 4.0 International. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_SA_1_0">CC_BY_NC_SA_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial Share Alike 1.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_SA_2_0">CC_BY_NC_SA_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial Share Alike 2.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_SA_2_5">CC_BY_NC_SA_2_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial Share Alike 2.5 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_SA_3_0">CC_BY_NC_SA_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial Share Alike 3.0 Unported. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_NC_SA_4_0">CC_BY_NC_SA_4_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Non Commercial Share Alike 4.0 International. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_ND_1_0">CC_BY_ND_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution No Derivatives 1.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_ND_2_0">CC_BY_ND_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution No Derivatives 2.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_ND_2_5">CC_BY_ND_2_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution No Derivatives 2.5 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_ND_3_0">CC_BY_ND_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution No Derivatives 3.0 Unported. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_ND_4_0">CC_BY_ND_4_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution No Derivatives 4.0 International. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_SA_1_0">CC_BY_SA_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Share Alike 1.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_SA_2_0">CC_BY_SA_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Share Alike 2.0 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_SA_2_0_UK">CC_BY_SA_2_0_UK</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Share Alike 2.0 England and Wales. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_SA_2_5">CC_BY_SA_2_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Share Alike 2.5 Generic. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_SA_3_0">CC_BY_SA_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Share Alike 3.0 Unported. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_SA_3_0_AT">CC_BY_SA_3_0_AT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution-Share Alike 3.0 Austria. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_BY_SA_4_0">CC_BY_SA_4_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Attribution Share Alike 4.0 International. |
| <code><a href="#construct-hub.SpdxLicense.property.CC_PDDC">CC_PDDC</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Public Domain Dedication and Certification. |
| <code><a href="#construct-hub.SpdxLicense.property.CC0_1_0">CC0_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Creative Commons Zero v1.0 Universal. |
| <code><a href="#construct-hub.SpdxLicense.property.CDDL_1_0">CDDL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Common Development and Distribution License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.CDDL_1_1">CDDL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Common Development and Distribution License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.CDLA_PERMISSIVE_1_0">CDLA_PERMISSIVE_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Community Data License Agreement Permissive 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.CDLA_SHARING_1_0">CDLA_SHARING_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Community Data License Agreement Sharing 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.CECILL_1_0">CECILL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CeCILL Free Software License Agreement v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.CECILL_1_1">CECILL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CeCILL Free Software License Agreement v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.CECILL_2_0">CECILL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CeCILL Free Software License Agreement v2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.CECILL_2_1">CECILL_2_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CeCILL Free Software License Agreement v2.1. |
| <code><a href="#construct-hub.SpdxLicense.property.CECILL_B">CECILL_B</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CeCILL-B Free Software License Agreement. |
| <code><a href="#construct-hub.SpdxLicense.property.CECILL_C">CECILL_C</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CeCILL-C Free Software License Agreement. |
| <code><a href="#construct-hub.SpdxLicense.property.CERN_OHL_1_1">CERN_OHL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CERN Open Hardware Licence v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.CERN_OHL_1_2">CERN_OHL_1_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CERN Open Hardware Licence v1.2. |
| <code><a href="#construct-hub.SpdxLicense.property.CERN_OHL_P_2_0">CERN_OHL_P_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CERN Open Hardware Licence Version 2 - Permissive. |
| <code><a href="#construct-hub.SpdxLicense.property.CERN_OHL_S_2_0">CERN_OHL_S_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CERN Open Hardware Licence Version 2 - Strongly Reciprocal. |
| <code><a href="#construct-hub.SpdxLicense.property.CERN_OHL_W_2_0">CERN_OHL_W_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CERN Open Hardware Licence Version 2 - Weakly Reciprocal. |
| <code><a href="#construct-hub.SpdxLicense.property.CL_ARTISTIC">CL_ARTISTIC</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Clarified Artistic License. |
| <code><a href="#construct-hub.SpdxLicense.property.CNRI_JYTHON">CNRI_JYTHON</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CNRI Jython License. |
| <code><a href="#construct-hub.SpdxLicense.property.CNRI_PYTHON">CNRI_PYTHON</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CNRI Python License. |
| <code><a href="#construct-hub.SpdxLicense.property.CNRI_PYTHON_GPL_COMPATIBLE">CNRI_PYTHON_GPL_COMPATIBLE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CNRI Python Open Source GPL Compatible License Agreement. |
| <code><a href="#construct-hub.SpdxLicense.property.CONDOR_1_1">CONDOR_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Condor Public License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.COPYLEFT_NEXT_0_3_0">COPYLEFT_NEXT_0_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | copyleft-next 0.3.0. |
| <code><a href="#construct-hub.SpdxLicense.property.COPYLEFT_NEXT_0_3_1">COPYLEFT_NEXT_0_3_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | copyleft-next 0.3.1. |
| <code><a href="#construct-hub.SpdxLicense.property.CPAL_1_0">CPAL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Common Public Attribution License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.CPL_1_0">CPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Common Public License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.CPOL_1_02">CPOL_1_02</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Code Project Open License 1.02. |
| <code><a href="#construct-hub.SpdxLicense.property.CROSSWORD">CROSSWORD</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Crossword License. |
| <code><a href="#construct-hub.SpdxLicense.property.CRYSTAL_STACKER">CRYSTAL_STACKER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CrystalStacker License. |
| <code><a href="#construct-hub.SpdxLicense.property.CUA_OPL_1_0">CUA_OPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CUA Office Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.CUBE">CUBE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Cube License. |
| <code><a href="#construct-hub.SpdxLicense.property.CURL">CURL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | curl License. |
| <code><a href="#construct-hub.SpdxLicense.property.D_FSL_1_0">D_FSL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Deutsche Freie Software Lizenz. |
| <code><a href="#construct-hub.SpdxLicense.property.DIFFMARK">DIFFMARK</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | diffmark license. |
| <code><a href="#construct-hub.SpdxLicense.property.DOC">DOC</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | DOC License. |
| <code><a href="#construct-hub.SpdxLicense.property.DOTSEQN">DOTSEQN</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Dotseqn License. |
| <code><a href="#construct-hub.SpdxLicense.property.DSDP">DSDP</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | DSDP License. |
| <code><a href="#construct-hub.SpdxLicense.property.DVIPDFM">DVIPDFM</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | dvipdfm License. |
| <code><a href="#construct-hub.SpdxLicense.property.E_GENIX">E_GENIX</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | eGenix.com Public License 1.1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ECL_1_0">ECL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Educational Community License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ECL_2_0">ECL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Educational Community License v2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ECOS_2_0">ECOS_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | eCos license version 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.EFL_1_0">EFL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Eiffel Forum License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.EFL_2_0">EFL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Eiffel Forum License v2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ENTESSA">ENTESSA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Entessa Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.EPICS">EPICS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | EPICS Open License. |
| <code><a href="#construct-hub.SpdxLicense.property.EPL_1_0">EPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Eclipse Public License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.EPL_2_0">EPL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Eclipse Public License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ERLPL_1_1">ERLPL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Erlang Public License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.ETALAB_2_0">ETALAB_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Etalab Open License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.EUDATAGRID">EUDATAGRID</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | EU DataGrid Software License. |
| <code><a href="#construct-hub.SpdxLicense.property.EUPL_1_0">EUPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | European Union Public License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.EUPL_1_1">EUPL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | European Union Public License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.EUPL_1_2">EUPL_1_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | European Union Public License 1.2. |
| <code><a href="#construct-hub.SpdxLicense.property.EUROSYM">EUROSYM</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Eurosym License. |
| <code><a href="#construct-hub.SpdxLicense.property.FAIR">FAIR</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Fair License. |
| <code><a href="#construct-hub.SpdxLicense.property.FRAMEWORX_1_0">FRAMEWORX_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Frameworx Open License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.FREE_IMAGE">FREE_IMAGE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | FreeImage Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.FSFAP">FSFAP</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | FSF All Permissive License. |
| <code><a href="#construct-hub.SpdxLicense.property.FSFUL">FSFUL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | FSF Unlimited License. |
| <code><a href="#construct-hub.SpdxLicense.property.FSFULLR">FSFULLR</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | FSF Unlimited License (with License Retention). |
| <code><a href="#construct-hub.SpdxLicense.property.FTL">FTL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Freetype Project License. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_1">GFDL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_1_INVARIANTS_ONLY">GFDL_1_1_INVARIANTS_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.1 only - invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_1_INVARIANTS_OR_LATER">GFDL_1_1_INVARIANTS_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.1 or later - invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_1_NO_INVARIANTS_ONLY">GFDL_1_1_NO_INVARIANTS_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.1 only - no invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_1_NO_INVARIANTS_OR_LATER">GFDL_1_1_NO_INVARIANTS_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.1 or later - no invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_1_ONLY">GFDL_1_1_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.1 only. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_1_OR_LATER">GFDL_1_1_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.1 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_2">GFDL_1_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.2. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_2_INVARIANTS_ONLY">GFDL_1_2_INVARIANTS_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.2 only - invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_2_INVARIANTS_OR_LATER">GFDL_1_2_INVARIANTS_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.2 or later - invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_2_NO_INVARIANTS_ONLY">GFDL_1_2_NO_INVARIANTS_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.2 only - no invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_2_NO_INVARIANTS_OR_LATER">GFDL_1_2_NO_INVARIANTS_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.2 or later - no invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_2_ONLY">GFDL_1_2_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.2 only. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_2_OR_LATER">GFDL_1_2_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.2 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_3">GFDL_1_3</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.3. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_3_INVARIANTS_ONLY">GFDL_1_3_INVARIANTS_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.3 only - invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_3_INVARIANTS_OR_LATER">GFDL_1_3_INVARIANTS_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.3 or later - invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_3_NO_INVARIANTS_ONLY">GFDL_1_3_NO_INVARIANTS_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.3 only - no invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_3_NO_INVARIANTS_OR_LATER">GFDL_1_3_NO_INVARIANTS_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.3 or later - no invariants. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_3_ONLY">GFDL_1_3_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.3 only. |
| <code><a href="#construct-hub.SpdxLicense.property.GFDL_1_3_OR_LATER">GFDL_1_3_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Free Documentation License v1.3 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.GIFTWARE">GIFTWARE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Giftware License. |
| <code><a href="#construct-hub.SpdxLicense.property.GL2_P_S">GL2_P_S</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GL2PS License. |
| <code><a href="#construct-hub.SpdxLicense.property.GLIDE">GLIDE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | 3dfx Glide License. |
| <code><a href="#construct-hub.SpdxLicense.property.GLULXE">GLULXE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Glulxe License. |
| <code><a href="#construct-hub.SpdxLicense.property.GLWTPL">GLWTPL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Good Luck With That Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.GNUPLOT">GNUPLOT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | gnuplot License. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_1_0">GPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v1.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_1_0_ONLY">GPL_1_0_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v1.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_1_0_OR_LATER">GPL_1_0_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v1.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_1_0_PLUS">GPL_1_0_PLUS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v1.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_2_0">GPL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v2.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_2_0_ONLY">GPL_2_0_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v2.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_2_0_OR_LATER">GPL_2_0_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v2.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_2_0_PLUS">GPL_2_0_PLUS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v2.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_2_0_WITH_AUTOCONF_EXCEPTION">GPL_2_0_WITH_AUTOCONF_EXCEPTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v2.0 w/Autoconf exception. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_2_0_WITH_BISON_EXCEPTION">GPL_2_0_WITH_BISON_EXCEPTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v2.0 w/Bison exception. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_2_0_WITH_CLASSPATH_EXCEPTION">GPL_2_0_WITH_CLASSPATH_EXCEPTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v2.0 w/Classpath exception. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_2_0_WITH_FONT_EXCEPTION">GPL_2_0_WITH_FONT_EXCEPTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v2.0 w/Font exception. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_2_0_WITH_GCC_EXCEPTION">GPL_2_0_WITH_GCC_EXCEPTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v2.0 w/GCC Runtime Library exception. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_3_0">GPL_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v3.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_3_0_ONLY">GPL_3_0_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v3.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_3_0_OR_LATER">GPL_3_0_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v3.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_3_0_PLUS">GPL_3_0_PLUS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v3.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_3_0_WITH_AUTOCONF_EXCEPTION">GPL_3_0_WITH_AUTOCONF_EXCEPTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v3.0 w/Autoconf exception. |
| <code><a href="#construct-hub.SpdxLicense.property.GPL_3_0_WITH_GCC_EXCEPTION">GPL_3_0_WITH_GCC_EXCEPTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU General Public License v3.0 w/GCC Runtime Library exception. |
| <code><a href="#construct-hub.SpdxLicense.property.GSOAP_1_3B">GSOAP_1_3B</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | gSOAP Public License v1.3b. |
| <code><a href="#construct-hub.SpdxLicense.property.HASKELL_REPORT">HASKELL_REPORT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Haskell Language Report License. |
| <code><a href="#construct-hub.SpdxLicense.property.HIPPOCRATIC_2_1">HIPPOCRATIC_2_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Hippocratic License 2.1. |
| <code><a href="#construct-hub.SpdxLicense.property.HPND">HPND</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Historical Permission Notice and Disclaimer. |
| <code><a href="#construct-hub.SpdxLicense.property.HPND_SELL_VARIANT">HPND_SELL_VARIANT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Historical Permission Notice and Disclaimer - sell variant. |
| <code><a href="#construct-hub.SpdxLicense.property.HTMLTIDY">HTMLTIDY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | HTML Tidy License. |
| <code><a href="#construct-hub.SpdxLicense.property.I_MATIX">I_MATIX</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | iMatix Standard Function Library Agreement. |
| <code><a href="#construct-hub.SpdxLicense.property.IBM_PIBS">IBM_PIBS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | IBM PowerPC Initialization and Boot Software. |
| <code><a href="#construct-hub.SpdxLicense.property.ICU">ICU</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | ICU License. |
| <code><a href="#construct-hub.SpdxLicense.property.IJG">IJG</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Independent JPEG Group License. |
| <code><a href="#construct-hub.SpdxLicense.property.IMAGE_MAGICK">IMAGE_MAGICK</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | ImageMagick License. |
| <code><a href="#construct-hub.SpdxLicense.property.IMLIB2">IMLIB2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Imlib2 License. |
| <code><a href="#construct-hub.SpdxLicense.property.INFO_ZIP">INFO_ZIP</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Info-ZIP License. |
| <code><a href="#construct-hub.SpdxLicense.property.INTEL">INTEL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Intel Open Source License. |
| <code><a href="#construct-hub.SpdxLicense.property.INTEL_ACPI">INTEL_ACPI</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Intel ACPI Software License Agreement. |
| <code><a href="#construct-hub.SpdxLicense.property.INTERBASE_1_0">INTERBASE_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Interbase Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.IPA">IPA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | IPA Font License. |
| <code><a href="#construct-hub.SpdxLicense.property.IPL_1_0">IPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | IBM Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ISC">ISC</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | ISC License. |
| <code><a href="#construct-hub.SpdxLicense.property.JASPER_2_0">JASPER_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | JasPer License. |
| <code><a href="#construct-hub.SpdxLicense.property.JPNIC">JPNIC</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Japan Network Information Center License. |
| <code><a href="#construct-hub.SpdxLicense.property.JSON">JSON</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | JSON License. |
| <code><a href="#construct-hub.SpdxLicense.property.LAL_1_2">LAL_1_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Licence Art Libre 1.2. |
| <code><a href="#construct-hub.SpdxLicense.property.LAL_1_3">LAL_1_3</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Licence Art Libre 1.3. |
| <code><a href="#construct-hub.SpdxLicense.property.LATEX2_E">LATEX2_E</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Latex2e License. |
| <code><a href="#construct-hub.SpdxLicense.property.LEPTONICA">LEPTONICA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Leptonica License. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_2_0">LGPL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Library General Public License v2 only. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_2_0_ONLY">LGPL_2_0_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Library General Public License v2 only. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_2_0_OR_LATER">LGPL_2_0_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Library General Public License v2 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_2_0_PLUS">LGPL_2_0_PLUS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Library General Public License v2 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_2_1">LGPL_2_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Lesser General Public License v2.1 only. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_2_1_ONLY">LGPL_2_1_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Lesser General Public License v2.1 only. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_2_1_OR_LATER">LGPL_2_1_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Lesser General Public License v2.1 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_2_1_PLUS">LGPL_2_1_PLUS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Library General Public License v2.1 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_3_0">LGPL_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Lesser General Public License v3.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_3_0_ONLY">LGPL_3_0_ONLY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Lesser General Public License v3.0 only. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_3_0_OR_LATER">LGPL_3_0_OR_LATER</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Lesser General Public License v3.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPL_3_0_PLUS">LGPL_3_0_PLUS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | GNU Lesser General Public License v3.0 or later. |
| <code><a href="#construct-hub.SpdxLicense.property.LGPLLR">LGPLLR</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Lesser General Public License For Linguistic Resources. |
| <code><a href="#construct-hub.SpdxLicense.property.LIBPNG">LIBPNG</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | libpng License. |
| <code><a href="#construct-hub.SpdxLicense.property.LIBPNG_2_0">LIBPNG_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | PNG Reference Library version 2. |
| <code><a href="#construct-hub.SpdxLicense.property.LIBSELINUX_1_0">LIBSELINUX_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | libselinux public domain notice. |
| <code><a href="#construct-hub.SpdxLicense.property.LIBTIFF">LIBTIFF</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | libtiff License. |
| <code><a href="#construct-hub.SpdxLicense.property.LILIQ_P_1_1">LILIQ_P_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Licence Libre du Québec – Permissive version 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.LILIQ_R_1_1">LILIQ_R_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Licence Libre du Québec – Réciprocité version 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.LILIQ_RPLUS_1_1">LILIQ_RPLUS_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Licence Libre du Québec – Réciprocité forte version 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.LINUX_OPENIB">LINUX_OPENIB</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Linux Kernel Variant of OpenIB.org license. |
| <code><a href="#construct-hub.SpdxLicense.property.LPL_1_0">LPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Lucent Public License Version 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.LPL_1_02">LPL_1_02</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Lucent Public License v1.02. |
| <code><a href="#construct-hub.SpdxLicense.property.LPPL_1_0">LPPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | LaTeX Project Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.LPPL_1_1">LPPL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | LaTeX Project Public License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.LPPL_1_2">LPPL_1_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | LaTeX Project Public License v1.2. |
| <code><a href="#construct-hub.SpdxLicense.property.LPPL_1_3A">LPPL_1_3A</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | LaTeX Project Public License v1.3a. |
| <code><a href="#construct-hub.SpdxLicense.property.LPPL_1_3C">LPPL_1_3C</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | LaTeX Project Public License v1.3c. |
| <code><a href="#construct-hub.SpdxLicense.property.MAKE_INDEX">MAKE_INDEX</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | MakeIndex License. |
| <code><a href="#construct-hub.SpdxLicense.property.MIR_O_S">MIR_O_S</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | The MirOS Licence. |
| <code><a href="#construct-hub.SpdxLicense.property.MIT">MIT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | MIT License. |
| <code><a href="#construct-hub.SpdxLicense.property.MIT_0">MIT_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | MIT No Attribution. |
| <code><a href="#construct-hub.SpdxLicense.property.MIT_ADVERTISING">MIT_ADVERTISING</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Enlightenment License (e16). |
| <code><a href="#construct-hub.SpdxLicense.property.MIT_CMU">MIT_CMU</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | CMU License. |
| <code><a href="#construct-hub.SpdxLicense.property.MIT_ENNA">MIT_ENNA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | enna License. |
| <code><a href="#construct-hub.SpdxLicense.property.MIT_FEH">MIT_FEH</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | feh License. |
| <code><a href="#construct-hub.SpdxLicense.property.MIT_OPEN_GROUP">MIT_OPEN_GROUP</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | MIT Open Group variant. |
| <code><a href="#construct-hub.SpdxLicense.property.MITNFA">MITNFA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | MIT +no-false-attribs license. |
| <code><a href="#construct-hub.SpdxLicense.property.MOTOSOTO">MOTOSOTO</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Motosoto License. |
| <code><a href="#construct-hub.SpdxLicense.property.MPICH2">MPICH2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | mpich2 License. |
| <code><a href="#construct-hub.SpdxLicense.property.MPL_1_0">MPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Mozilla Public License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.MPL_1_1">MPL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Mozilla Public License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.MPL_2_0">MPL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Mozilla Public License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.MPL_2_0_NO_COPYLEFT_EXCEPTION">MPL_2_0_NO_COPYLEFT_EXCEPTION</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Mozilla Public License 2.0 (no copyleft exception). |
| <code><a href="#construct-hub.SpdxLicense.property.MS_PL">MS_PL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Microsoft Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.MS_RL">MS_RL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Microsoft Reciprocal License. |
| <code><a href="#construct-hub.SpdxLicense.property.MTLL">MTLL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Matrix Template Library License. |
| <code><a href="#construct-hub.SpdxLicense.property.MULANPSL_1_0">MULANPSL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Mulan Permissive Software License, Version 1. |
| <code><a href="#construct-hub.SpdxLicense.property.MULANPSL_2_0">MULANPSL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Mulan Permissive Software License, Version 2. |
| <code><a href="#construct-hub.SpdxLicense.property.MULTICS">MULTICS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Multics License. |
| <code><a href="#construct-hub.SpdxLicense.property.MUP">MUP</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Mup License. |
| <code><a href="#construct-hub.SpdxLicense.property.NASA_1_3">NASA_1_3</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | NASA Open Source Agreement 1.3. |
| <code><a href="#construct-hub.SpdxLicense.property.NAUMEN">NAUMEN</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Naumen Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.NBPL_1_0">NBPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Net Boolean Public License v1. |
| <code><a href="#construct-hub.SpdxLicense.property.NCGL_UK_2_0">NCGL_UK_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Non-Commercial Government Licence. |
| <code><a href="#construct-hub.SpdxLicense.property.NCSA">NCSA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | University of Illinois/NCSA Open Source License. |
| <code><a href="#construct-hub.SpdxLicense.property.NET_CD_F">NET_CD_F</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | NetCDF license. |
| <code><a href="#construct-hub.SpdxLicense.property.NET_SNMP">NET_SNMP</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Net-SNMP License. |
| <code><a href="#construct-hub.SpdxLicense.property.NEWSLETR">NEWSLETR</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Newsletr License. |
| <code><a href="#construct-hub.SpdxLicense.property.NGPL">NGPL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Nethack General Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.NIST_PD">NIST_PD</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | NIST Public Domain Notice. |
| <code><a href="#construct-hub.SpdxLicense.property.NIST_PD_FALLBACK">NIST_PD_FALLBACK</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | NIST Public Domain Notice with license fallback. |
| <code><a href="#construct-hub.SpdxLicense.property.NLOD_1_0">NLOD_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Norwegian Licence for Open Government Data. |
| <code><a href="#construct-hub.SpdxLicense.property.NLPL">NLPL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | No Limit Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.NOKIA">NOKIA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Nokia Open Source License. |
| <code><a href="#construct-hub.SpdxLicense.property.NOSL">NOSL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Netizen Open Source License. |
| <code><a href="#construct-hub.SpdxLicense.property.NOWEB">NOWEB</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Noweb License. |
| <code><a href="#construct-hub.SpdxLicense.property.NPL_1_0">NPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Netscape Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.NPL_1_1">NPL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Netscape Public License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.NPOSL_3_0">NPOSL_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Non-Profit Open Software License 3.0. |
| <code><a href="#construct-hub.SpdxLicense.property.NRL">NRL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | NRL License. |
| <code><a href="#construct-hub.SpdxLicense.property.NTP">NTP</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | NTP License. |
| <code><a href="#construct-hub.SpdxLicense.property.NTP_0">NTP_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | NTP No Attribution. |
| <code><a href="#construct-hub.SpdxLicense.property.NUNIT">NUNIT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Nunit License. |
| <code><a href="#construct-hub.SpdxLicense.property.O_UDA_1_0">O_UDA_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Use of Data Agreement v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OCCT_PL">OCCT_PL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open CASCADE Technology Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.OCLC_2_0">OCLC_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | OCLC Research Public License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ODBL_1_0">ODBL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | ODC Open Database License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ODC_BY_1_0">ODC_BY_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Data Commons Attribution License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OFL_1_0">OFL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SIL Open Font License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OFL_1_0_NO_RFN">OFL_1_0_NO_RFN</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SIL Open Font License 1.0 with no Reserved Font Name. |
| <code><a href="#construct-hub.SpdxLicense.property.OFL_1_0_RFN">OFL_1_0_RFN</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SIL Open Font License 1.0 with Reserved Font Name. |
| <code><a href="#construct-hub.SpdxLicense.property.OFL_1_1">OFL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SIL Open Font License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.OFL_1_1_NO_RFN">OFL_1_1_NO_RFN</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SIL Open Font License 1.1 with no Reserved Font Name. |
| <code><a href="#construct-hub.SpdxLicense.property.OFL_1_1_RFN">OFL_1_1_RFN</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SIL Open Font License 1.1 with Reserved Font Name. |
| <code><a href="#construct-hub.SpdxLicense.property.OGC_1_0">OGC_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | OGC Software License, Version 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OGL_CANADA_2_0">OGL_CANADA_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Government Licence - Canada. |
| <code><a href="#construct-hub.SpdxLicense.property.OGL_UK_1_0">OGL_UK_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Government Licence v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OGL_UK_2_0">OGL_UK_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Government Licence v2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OGL_UK_3_0">OGL_UK_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Government Licence v3.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OGTSL">OGTSL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Group Test Suite License. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_1_1">OLDAP_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_1_2">OLDAP_1_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v1.2. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_1_3">OLDAP_1_3</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v1.3. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_1_4">OLDAP_1_4</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v1.4. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_0">OLDAP_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B). |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_0_1">OLDAP_2_0_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.0.1. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_1">OLDAP_2_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.1. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_2">OLDAP_2_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.2. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_2_1">OLDAP_2_2_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.2.1. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_2_2">OLDAP_2_2_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License 2.2.2. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_3">OLDAP_2_3</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.3. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_4">OLDAP_2_4</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.4. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_5">OLDAP_2_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.5. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_6">OLDAP_2_6</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.6. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_7">OLDAP_2_7</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.7. |
| <code><a href="#construct-hub.SpdxLicense.property.OLDAP_2_8">OLDAP_2_8</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open LDAP Public License v2.8. |
| <code><a href="#construct-hub.SpdxLicense.property.OML">OML</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Market License. |
| <code><a href="#construct-hub.SpdxLicense.property.OPEN_SS_L">OPEN_SS_L</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | OpenSSL License. |
| <code><a href="#construct-hub.SpdxLicense.property.OPL_1_0">OPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OSET_PL_2_1">OSET_PL_2_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | OSET Public License version 2.1. |
| <code><a href="#construct-hub.SpdxLicense.property.OSL_1_0">OSL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Software License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OSL_1_1">OSL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Software License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.OSL_2_0">OSL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Software License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.OSL_2_1">OSL_2_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Software License 2.1. |
| <code><a href="#construct-hub.SpdxLicense.property.OSL_3_0">OSL_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Open Software License 3.0. |
| <code><a href="#construct-hub.SpdxLicense.property.PARITY_6_0_0">PARITY_6_0_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | The Parity Public License 6.0.0. |
| <code><a href="#construct-hub.SpdxLicense.property.PARITY_7_0_0">PARITY_7_0_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | The Parity Public License 7.0.0. |
| <code><a href="#construct-hub.SpdxLicense.property.PDDL_1_0">PDDL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | ODC Public Domain Dedication & License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.PHP_3_0">PHP_3_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | PHP License v3.0. |
| <code><a href="#construct-hub.SpdxLicense.property.PHP_3_01">PHP_3_01</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | PHP License v3.01. |
| <code><a href="#construct-hub.SpdxLicense.property.PLEXUS">PLEXUS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Plexus Classworlds License. |
| <code><a href="#construct-hub.SpdxLicense.property.POLYFORM_NONCOMMERCIAL_1_0_0">POLYFORM_NONCOMMERCIAL_1_0_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | PolyForm Noncommercial License 1.0.0. |
| <code><a href="#construct-hub.SpdxLicense.property.POLYFORM_SMALL_BUSINESS_1_0_0">POLYFORM_SMALL_BUSINESS_1_0_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | PolyForm Small Business License 1.0.0. |
| <code><a href="#construct-hub.SpdxLicense.property.POSTGRE_SQ_L">POSTGRE_SQ_L</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | PostgreSQL License. |
| <code><a href="#construct-hub.SpdxLicense.property.PSF_2_0">PSF_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Python Software Foundation License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.PSFRAG">PSFRAG</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | psfrag License. |
| <code><a href="#construct-hub.SpdxLicense.property.PSUTILS">PSUTILS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | psutils License. |
| <code><a href="#construct-hub.SpdxLicense.property.PYTHON_2_0">PYTHON_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Python License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.QHULL">QHULL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Qhull License. |
| <code><a href="#construct-hub.SpdxLicense.property.QPL_1_0">QPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Q Public License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.RDISC">RDISC</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Rdisc License. |
| <code><a href="#construct-hub.SpdxLicense.property.RHECOS_1_1">RHECOS_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Red Hat eCos Public License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.RPL_1_1">RPL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Reciprocal Public License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.RPL_1_5">RPL_1_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Reciprocal Public License 1.5. |
| <code><a href="#construct-hub.SpdxLicense.property.RPSL_1_0">RPSL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | RealNetworks Public Source License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.RSA_MD">RSA_MD</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | RSA Message-Digest License. |
| <code><a href="#construct-hub.SpdxLicense.property.RSCPL">RSCPL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Ricoh Source Code Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.RUBY">RUBY</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Ruby License. |
| <code><a href="#construct-hub.SpdxLicense.property.SAX_PD">SAX_PD</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Sax Public Domain Notice. |
| <code><a href="#construct-hub.SpdxLicense.property.SAXPATH">SAXPATH</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Saxpath License. |
| <code><a href="#construct-hub.SpdxLicense.property.SCEA">SCEA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SCEA Shared Source License. |
| <code><a href="#construct-hub.SpdxLicense.property.SENDMAIL">SENDMAIL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Sendmail License. |
| <code><a href="#construct-hub.SpdxLicense.property.SENDMAIL_8_23">SENDMAIL_8_23</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Sendmail License 8.23. |
| <code><a href="#construct-hub.SpdxLicense.property.SGI_B_1_0">SGI_B_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SGI Free Software License B v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.SGI_B_1_1">SGI_B_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SGI Free Software License B v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.SGI_B_2_0">SGI_B_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SGI Free Software License B v2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.SHL_0_5">SHL_0_5</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Solderpad Hardware License v0.5. |
| <code><a href="#construct-hub.SpdxLicense.property.SHL_0_51">SHL_0_51</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Solderpad Hardware License, Version 0.51. |
| <code><a href="#construct-hub.SpdxLicense.property.SIMPL_2_0">SIMPL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Simple Public License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.SISSL">SISSL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Sun Industry Standards Source License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.SISSL_1_2">SISSL_1_2</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Sun Industry Standards Source License v1.2. |
| <code><a href="#construct-hub.SpdxLicense.property.SLEEPYCAT">SLEEPYCAT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Sleepycat License. |
| <code><a href="#construct-hub.SpdxLicense.property.SMLNJ">SMLNJ</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Standard ML of New Jersey License. |
| <code><a href="#construct-hub.SpdxLicense.property.SMPPL">SMPPL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Secure Messaging Protocol Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.SNIA">SNIA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SNIA Public License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.SPENCER_86">SPENCER_86</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Spencer License 86. |
| <code><a href="#construct-hub.SpdxLicense.property.SPENCER_94">SPENCER_94</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Spencer License 94. |
| <code><a href="#construct-hub.SpdxLicense.property.SPENCER_99">SPENCER_99</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Spencer License 99. |
| <code><a href="#construct-hub.SpdxLicense.property.SPL_1_0">SPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Sun Public License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.SSH_OPENSSH">SSH_OPENSSH</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SSH OpenSSH license. |
| <code><a href="#construct-hub.SpdxLicense.property.SSH_SHORT">SSH_SHORT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SSH short notice. |
| <code><a href="#construct-hub.SpdxLicense.property.SSPL_1_0">SSPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Server Side Public License, v 1. |
| <code><a href="#construct-hub.SpdxLicense.property.STANDARDML_NJ">STANDARDML_NJ</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Standard ML of New Jersey License. |
| <code><a href="#construct-hub.SpdxLicense.property.SUGARCRM_1_1_3">SUGARCRM_1_1_3</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | SugarCRM Public License v1.1.3. |
| <code><a href="#construct-hub.SpdxLicense.property.SWL">SWL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Scheme Widget Library (SWL) Software License Agreement. |
| <code><a href="#construct-hub.SpdxLicense.property.TAPR_OHL_1_0">TAPR_OHL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | TAPR Open Hardware License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.TCL">TCL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | TCL/TK License. |
| <code><a href="#construct-hub.SpdxLicense.property.TCP_WRAPPERS">TCP_WRAPPERS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | TCP Wrappers License. |
| <code><a href="#construct-hub.SpdxLicense.property.TMATE">TMATE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | TMate Open Source License. |
| <code><a href="#construct-hub.SpdxLicense.property.TORQUE_1_1">TORQUE_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | TORQUE v2.5+ Software License v1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.TOSL">TOSL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Trusster Open Source License. |
| <code><a href="#construct-hub.SpdxLicense.property.TU_BERLIN_1_0">TU_BERLIN_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Technische Universitaet Berlin License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.TU_BERLIN_2_0">TU_BERLIN_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Technische Universitaet Berlin License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.UCL_1_0">UCL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Upstream Compatibility License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.UNICODE_DFS_2015">UNICODE_DFS_2015</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Unicode License Agreement - Data Files and Software (2015). |
| <code><a href="#construct-hub.SpdxLicense.property.UNICODE_DFS_2016">UNICODE_DFS_2016</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Unicode License Agreement - Data Files and Software (2016). |
| <code><a href="#construct-hub.SpdxLicense.property.UNICODE_TOU">UNICODE_TOU</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Unicode Terms of Use. |
| <code><a href="#construct-hub.SpdxLicense.property.UNLICENSE">UNLICENSE</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | The Unlicense. |
| <code><a href="#construct-hub.SpdxLicense.property.UNLICENSED">UNLICENSED</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Packages that have not been licensed. |
| <code><a href="#construct-hub.SpdxLicense.property.UPL_1_0">UPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Universal Permissive License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.VIM">VIM</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Vim License. |
| <code><a href="#construct-hub.SpdxLicense.property.VOSTROM">VOSTROM</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | VOSTROM Public License for Open Source. |
| <code><a href="#construct-hub.SpdxLicense.property.VSL_1_0">VSL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Vovida Software License v1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.W3_C">W3_C</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | W3C Software Notice and License (2002-12-31). |
| <code><a href="#construct-hub.SpdxLicense.property.W3C_19980720">W3C_19980720</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | W3C Software Notice and License (1998-07-20). |
| <code><a href="#construct-hub.SpdxLicense.property.W3C_20150513">W3C_20150513</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | W3C Software Notice and Document License (2015-05-13). |
| <code><a href="#construct-hub.SpdxLicense.property.WATCOM_1_0">WATCOM_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Sybase Open Watcom Public License 1.0. |
| <code><a href="#construct-hub.SpdxLicense.property.WSUIPA">WSUIPA</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Wsuipa License. |
| <code><a href="#construct-hub.SpdxLicense.property.WTFPL">WTFPL</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Do What The F*ck You Want To Public License. |
| <code><a href="#construct-hub.SpdxLicense.property.WX_WINDOWS">WX_WINDOWS</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | wxWindows Library License. |
| <code><a href="#construct-hub.SpdxLicense.property.X11">X11</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | X11 License. |
| <code><a href="#construct-hub.SpdxLicense.property.XEROX">XEROX</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Xerox License. |
| <code><a href="#construct-hub.SpdxLicense.property.XFREE86_1_1">XFREE86_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | XFree86 License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.XINETD">XINETD</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | xinetd License. |
| <code><a href="#construct-hub.SpdxLicense.property.XNET">XNET</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | X.Net License. |
| <code><a href="#construct-hub.SpdxLicense.property.XPP">XPP</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | XPP License. |
| <code><a href="#construct-hub.SpdxLicense.property.XSKAT">XSKAT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | XSkat License. |
| <code><a href="#construct-hub.SpdxLicense.property.YPL_1_0">YPL_1_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Yahoo! |
| <code><a href="#construct-hub.SpdxLicense.property.YPL_1_1">YPL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Yahoo! |
| <code><a href="#construct-hub.SpdxLicense.property.ZED">ZED</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Zed License. |
| <code><a href="#construct-hub.SpdxLicense.property.ZEND_2_0">ZEND_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Zend License v2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ZERO_BSD">ZERO_BSD</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | BSD Zero Clause License. |
| <code><a href="#construct-hub.SpdxLicense.property.ZIMBRA_1_3">ZIMBRA_1_3</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Zimbra Public License v1.3. |
| <code><a href="#construct-hub.SpdxLicense.property.ZIMBRA_1_4">ZIMBRA_1_4</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Zimbra Public License v1.4. |
| <code><a href="#construct-hub.SpdxLicense.property.ZLIB">ZLIB</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | zlib License. |
| <code><a href="#construct-hub.SpdxLicense.property.ZLIB_ACKNOWLEDGEMENT">ZLIB_ACKNOWLEDGEMENT</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | zlib/libpng License with Acknowledgement. |
| <code><a href="#construct-hub.SpdxLicense.property.ZPL_1_1">ZPL_1_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Zope Public License 1.1. |
| <code><a href="#construct-hub.SpdxLicense.property.ZPL_2_0">ZPL_2_0</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Zope Public License 2.0. |
| <code><a href="#construct-hub.SpdxLicense.property.ZPL_2_1">ZPL_2_1</a></code> | <code><a href="#construct-hub.SpdxLicense">SpdxLicense</a></code> | Zope Public License 2.1. |

---

##### `AAL`<sup>Required</sup> <a name="AAL" id="construct-hub.SpdxLicense.property.AAL"></a>

```typescript
public readonly AAL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Attribution Assurance License.

> [https://opensource.org/licenses/attribution](https://opensource.org/licenses/attribution)

---

##### `ABSTYLES`<sup>Required</sup> <a name="ABSTYLES" id="construct-hub.SpdxLicense.property.ABSTYLES"></a>

```typescript
public readonly ABSTYLES: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Abstyles License.

> [https://fedoraproject.org/wiki/Licensing/Abstyles](https://fedoraproject.org/wiki/Licensing/Abstyles)

---

##### `ADOBE_2006`<sup>Required</sup> <a name="ADOBE_2006" id="construct-hub.SpdxLicense.property.ADOBE_2006"></a>

```typescript
public readonly ADOBE_2006: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Adobe Systems Incorporated Source Code License Agreement.

> [https://fedoraproject.org/wiki/Licensing/AdobeLicense](https://fedoraproject.org/wiki/Licensing/AdobeLicense)

---

##### `ADOBE_GLYPH`<sup>Required</sup> <a name="ADOBE_GLYPH" id="construct-hub.SpdxLicense.property.ADOBE_GLYPH"></a>

```typescript
public readonly ADOBE_GLYPH: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Adobe Glyph List License.

> [https://fedoraproject.org/wiki/Licensing/MIT#AdobeGlyph](https://fedoraproject.org/wiki/Licensing/MIT#AdobeGlyph)

---

##### `ADSL`<sup>Required</sup> <a name="ADSL" id="construct-hub.SpdxLicense.property.ADSL"></a>

```typescript
public readonly ADSL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Amazon Digital Services License.

> [https://fedoraproject.org/wiki/Licensing/AmazonDigitalServicesLicense](https://fedoraproject.org/wiki/Licensing/AmazonDigitalServicesLicense)

---

##### `AFL_1_1`<sup>Required</sup> <a name="AFL_1_1" id="construct-hub.SpdxLicense.property.AFL_1_1"></a>

```typescript
public readonly AFL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Academic Free License v1.1.

> [http://opensource.linux-mirror.org/licenses/afl-1.1.txt](http://opensource.linux-mirror.org/licenses/afl-1.1.txt)

---

##### `AFL_1_2`<sup>Required</sup> <a name="AFL_1_2" id="construct-hub.SpdxLicense.property.AFL_1_2"></a>

```typescript
public readonly AFL_1_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Academic Free License v1.2.

> [http://opensource.linux-mirror.org/licenses/afl-1.2.txt](http://opensource.linux-mirror.org/licenses/afl-1.2.txt)

---

##### `AFL_2_0`<sup>Required</sup> <a name="AFL_2_0" id="construct-hub.SpdxLicense.property.AFL_2_0"></a>

```typescript
public readonly AFL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Academic Free License v2.0.

> [http://wayback.archive.org/web/20060924134533/http://www.opensource.org/licenses/afl-2.0.txt](http://wayback.archive.org/web/20060924134533/http://www.opensource.org/licenses/afl-2.0.txt)

---

##### `AFL_2_1`<sup>Required</sup> <a name="AFL_2_1" id="construct-hub.SpdxLicense.property.AFL_2_1"></a>

```typescript
public readonly AFL_2_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Academic Free License v2.1.

> [http://opensource.linux-mirror.org/licenses/afl-2.1.txt](http://opensource.linux-mirror.org/licenses/afl-2.1.txt)

---

##### `AFL_3_0`<sup>Required</sup> <a name="AFL_3_0" id="construct-hub.SpdxLicense.property.AFL_3_0"></a>

```typescript
public readonly AFL_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Academic Free License v3.0.

> [http://www.rosenlaw.com/AFL3.0.htm](http://www.rosenlaw.com/AFL3.0.htm)

---

##### `AFMPARSE`<sup>Required</sup> <a name="AFMPARSE" id="construct-hub.SpdxLicense.property.AFMPARSE"></a>

```typescript
public readonly AFMPARSE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Afmparse License.

> [https://fedoraproject.org/wiki/Licensing/Afmparse](https://fedoraproject.org/wiki/Licensing/Afmparse)

---

##### `AGPL_1_0`<sup>Required</sup> <a name="AGPL_1_0" id="construct-hub.SpdxLicense.property.AGPL_1_0"></a>

```typescript
public readonly AGPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Affero General Public License v1.0.

> [http://www.affero.org/oagpl.html](http://www.affero.org/oagpl.html)

---

##### `AGPL_1_0_ONLY`<sup>Required</sup> <a name="AGPL_1_0_ONLY" id="construct-hub.SpdxLicense.property.AGPL_1_0_ONLY"></a>

```typescript
public readonly AGPL_1_0_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Affero General Public License v1.0 only.

> [http://www.affero.org/oagpl.html](http://www.affero.org/oagpl.html)

---

##### `AGPL_1_0_OR_LATER`<sup>Required</sup> <a name="AGPL_1_0_OR_LATER" id="construct-hub.SpdxLicense.property.AGPL_1_0_OR_LATER"></a>

```typescript
public readonly AGPL_1_0_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Affero General Public License v1.0 or later.

> [http://www.affero.org/oagpl.html](http://www.affero.org/oagpl.html)

---

##### `AGPL_3_0`<sup>Required</sup> <a name="AGPL_3_0" id="construct-hub.SpdxLicense.property.AGPL_3_0"></a>

```typescript
public readonly AGPL_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Affero General Public License v3.0.

> [https://www.gnu.org/licenses/agpl.txt](https://www.gnu.org/licenses/agpl.txt)

---

##### `AGPL_3_0_ONLY`<sup>Required</sup> <a name="AGPL_3_0_ONLY" id="construct-hub.SpdxLicense.property.AGPL_3_0_ONLY"></a>

```typescript
public readonly AGPL_3_0_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Affero General Public License v3.0 only.

> [https://www.gnu.org/licenses/agpl.txt](https://www.gnu.org/licenses/agpl.txt)

---

##### `AGPL_3_0_OR_LATER`<sup>Required</sup> <a name="AGPL_3_0_OR_LATER" id="construct-hub.SpdxLicense.property.AGPL_3_0_OR_LATER"></a>

```typescript
public readonly AGPL_3_0_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Affero General Public License v3.0 or later.

> [https://www.gnu.org/licenses/agpl.txt](https://www.gnu.org/licenses/agpl.txt)

---

##### `ALADDIN`<sup>Required</sup> <a name="ALADDIN" id="construct-hub.SpdxLicense.property.ALADDIN"></a>

```typescript
public readonly ALADDIN: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Aladdin Free Public License.

> [http://pages.cs.wisc.edu/~ghost/doc/AFPL/6.01/Public.htm](http://pages.cs.wisc.edu/~ghost/doc/AFPL/6.01/Public.htm)

---

##### `AMDPLPA`<sup>Required</sup> <a name="AMDPLPA" id="construct-hub.SpdxLicense.property.AMDPLPA"></a>

```typescript
public readonly AMDPLPA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

AMD's plpa_map.c License.

> [https://fedoraproject.org/wiki/Licensing/AMD_plpa_map_License](https://fedoraproject.org/wiki/Licensing/AMD_plpa_map_License)

---

##### `AML`<sup>Required</sup> <a name="AML" id="construct-hub.SpdxLicense.property.AML"></a>

```typescript
public readonly AML: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Apple MIT License.

> [https://fedoraproject.org/wiki/Licensing/Apple_MIT_License](https://fedoraproject.org/wiki/Licensing/Apple_MIT_License)

---

##### `AMPAS`<sup>Required</sup> <a name="AMPAS" id="construct-hub.SpdxLicense.property.AMPAS"></a>

```typescript
public readonly AMPAS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Academy of Motion Picture Arts and Sciences BSD.

> [https://fedoraproject.org/wiki/Licensing/BSD#AMPASBSD](https://fedoraproject.org/wiki/Licensing/BSD#AMPASBSD)

---

##### `ANTLR_PD`<sup>Required</sup> <a name="ANTLR_PD" id="construct-hub.SpdxLicense.property.ANTLR_PD"></a>

```typescript
public readonly ANTLR_PD: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

ANTLR Software Rights Notice.

> [http://www.antlr2.org/license.html](http://www.antlr2.org/license.html)

---

##### `ANTLR_PD_FALLBACK`<sup>Required</sup> <a name="ANTLR_PD_FALLBACK" id="construct-hub.SpdxLicense.property.ANTLR_PD_FALLBACK"></a>

```typescript
public readonly ANTLR_PD_FALLBACK: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

ANTLR Software Rights Notice with license fallback.

> [http://www.antlr2.org/license.html](http://www.antlr2.org/license.html)

---

##### `APACHE_1_0`<sup>Required</sup> <a name="APACHE_1_0" id="construct-hub.SpdxLicense.property.APACHE_1_0"></a>

```typescript
public readonly APACHE_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Apache License 1.0.

> [http://www.apache.org/licenses/LICENSE-1.0](http://www.apache.org/licenses/LICENSE-1.0)

---

##### `APACHE_1_1`<sup>Required</sup> <a name="APACHE_1_1" id="construct-hub.SpdxLicense.property.APACHE_1_1"></a>

```typescript
public readonly APACHE_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Apache License 1.1.

> [http://apache.org/licenses/LICENSE-1.1](http://apache.org/licenses/LICENSE-1.1)

---

##### `APACHE_2_0`<sup>Required</sup> <a name="APACHE_2_0" id="construct-hub.SpdxLicense.property.APACHE_2_0"></a>

```typescript
public readonly APACHE_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Apache License 2.0.

> [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

---

##### `APAFML`<sup>Required</sup> <a name="APAFML" id="construct-hub.SpdxLicense.property.APAFML"></a>

```typescript
public readonly APAFML: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Adobe Postscript AFM License.

> [https://fedoraproject.org/wiki/Licensing/AdobePostscriptAFM](https://fedoraproject.org/wiki/Licensing/AdobePostscriptAFM)

---

##### `APL_1_0`<sup>Required</sup> <a name="APL_1_0" id="construct-hub.SpdxLicense.property.APL_1_0"></a>

```typescript
public readonly APL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Adaptive Public License 1.0.

> [https://opensource.org/licenses/APL-1.0](https://opensource.org/licenses/APL-1.0)

---

##### `APSL_1_0`<sup>Required</sup> <a name="APSL_1_0" id="construct-hub.SpdxLicense.property.APSL_1_0"></a>

```typescript
public readonly APSL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Apple Public Source License 1.0.

> [https://fedoraproject.org/wiki/Licensing/Apple_Public_Source_License_1.0](https://fedoraproject.org/wiki/Licensing/Apple_Public_Source_License_1.0)

---

##### `APSL_1_1`<sup>Required</sup> <a name="APSL_1_1" id="construct-hub.SpdxLicense.property.APSL_1_1"></a>

```typescript
public readonly APSL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Apple Public Source License 1.1.

> [http://www.opensource.apple.com/source/IOSerialFamily/IOSerialFamily-7/APPLE_LICENSE](http://www.opensource.apple.com/source/IOSerialFamily/IOSerialFamily-7/APPLE_LICENSE)

---

##### `APSL_1_2`<sup>Required</sup> <a name="APSL_1_2" id="construct-hub.SpdxLicense.property.APSL_1_2"></a>

```typescript
public readonly APSL_1_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Apple Public Source License 1.2.

> [http://www.samurajdata.se/opensource/mirror/licenses/apsl.php](http://www.samurajdata.se/opensource/mirror/licenses/apsl.php)

---

##### `APSL_2_0`<sup>Required</sup> <a name="APSL_2_0" id="construct-hub.SpdxLicense.property.APSL_2_0"></a>

```typescript
public readonly APSL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Apple Public Source License 2.0.

> [http://www.opensource.apple.com/license/apsl/](http://www.opensource.apple.com/license/apsl/)

---

##### `ARTISTIC_1_0`<sup>Required</sup> <a name="ARTISTIC_1_0" id="construct-hub.SpdxLicense.property.ARTISTIC_1_0"></a>

```typescript
public readonly ARTISTIC_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Artistic License 1.0.

> [https://opensource.org/licenses/Artistic-1.0](https://opensource.org/licenses/Artistic-1.0)

---

##### `ARTISTIC_1_0_CL8`<sup>Required</sup> <a name="ARTISTIC_1_0_CL8" id="construct-hub.SpdxLicense.property.ARTISTIC_1_0_CL8"></a>

```typescript
public readonly ARTISTIC_1_0_CL8: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Artistic License 1.0 w/clause 8.

> [https://opensource.org/licenses/Artistic-1.0](https://opensource.org/licenses/Artistic-1.0)

---

##### `ARTISTIC_1_0_PERL`<sup>Required</sup> <a name="ARTISTIC_1_0_PERL" id="construct-hub.SpdxLicense.property.ARTISTIC_1_0_PERL"></a>

```typescript
public readonly ARTISTIC_1_0_PERL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Artistic License 1.0 (Perl).

> [http://dev.perl.org/licenses/artistic.html](http://dev.perl.org/licenses/artistic.html)

---

##### `ARTISTIC_2_0`<sup>Required</sup> <a name="ARTISTIC_2_0" id="construct-hub.SpdxLicense.property.ARTISTIC_2_0"></a>

```typescript
public readonly ARTISTIC_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Artistic License 2.0.

> [http://www.perlfoundation.org/artistic_license_2_0](http://www.perlfoundation.org/artistic_license_2_0)

---

##### `BAHYPH`<sup>Required</sup> <a name="BAHYPH" id="construct-hub.SpdxLicense.property.BAHYPH"></a>

```typescript
public readonly BAHYPH: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Bahyph License.

> [https://fedoraproject.org/wiki/Licensing/Bahyph](https://fedoraproject.org/wiki/Licensing/Bahyph)

---

##### `BARR`<sup>Required</sup> <a name="BARR" id="construct-hub.SpdxLicense.property.BARR"></a>

```typescript
public readonly BARR: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Barr License.

> [https://fedoraproject.org/wiki/Licensing/Barr](https://fedoraproject.org/wiki/Licensing/Barr)

---

##### `BEERWARE`<sup>Required</sup> <a name="BEERWARE" id="construct-hub.SpdxLicense.property.BEERWARE"></a>

```typescript
public readonly BEERWARE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Beerware License.

> [https://fedoraproject.org/wiki/Licensing/Beerware](https://fedoraproject.org/wiki/Licensing/Beerware)

---

##### `BITTORRENT_1_0`<sup>Required</sup> <a name="BITTORRENT_1_0" id="construct-hub.SpdxLicense.property.BITTORRENT_1_0"></a>

```typescript
public readonly BITTORRENT_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BitTorrent Open Source License v1.0.

> [http://sources.gentoo.org/cgi-bin/viewvc.cgi/gentoo-x86/licenses/BitTorrent?r1=1.1&r2=1.1.1.1&diff_format=s](http://sources.gentoo.org/cgi-bin/viewvc.cgi/gentoo-x86/licenses/BitTorrent?r1=1.1&r2=1.1.1.1&diff_format=s)

---

##### `BITTORRENT_1_1`<sup>Required</sup> <a name="BITTORRENT_1_1" id="construct-hub.SpdxLicense.property.BITTORRENT_1_1"></a>

```typescript
public readonly BITTORRENT_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BitTorrent Open Source License v1.1.

> [http://directory.fsf.org/wiki/License:BitTorrentOSL1.1](http://directory.fsf.org/wiki/License:BitTorrentOSL1.1)

---

##### `BLESSING`<sup>Required</sup> <a name="BLESSING" id="construct-hub.SpdxLicense.property.BLESSING"></a>

```typescript
public readonly BLESSING: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SQLite Blessing.

> [https://www.sqlite.org/src/artifact/e33a4df7e32d742a?ln=4-9](https://www.sqlite.org/src/artifact/e33a4df7e32d742a?ln=4-9)

---

##### `BLUEOAK_1_0_0`<sup>Required</sup> <a name="BLUEOAK_1_0_0" id="construct-hub.SpdxLicense.property.BLUEOAK_1_0_0"></a>

```typescript
public readonly BLUEOAK_1_0_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Blue Oak Model License 1.0.0.

> [https://blueoakcouncil.org/license/1.0.0](https://blueoakcouncil.org/license/1.0.0)

---

##### `BORCEUX`<sup>Required</sup> <a name="BORCEUX" id="construct-hub.SpdxLicense.property.BORCEUX"></a>

```typescript
public readonly BORCEUX: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Borceux license.

> [https://fedoraproject.org/wiki/Licensing/Borceux](https://fedoraproject.org/wiki/Licensing/Borceux)

---

##### `BSD_1_CLAUSE`<sup>Required</sup> <a name="BSD_1_CLAUSE" id="construct-hub.SpdxLicense.property.BSD_1_CLAUSE"></a>

```typescript
public readonly BSD_1_CLAUSE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 1-Clause License.

> [https://svnweb.freebsd.org/base/head/include/ifaddrs.h?revision=326823](https://svnweb.freebsd.org/base/head/include/ifaddrs.h?revision=326823)

---

##### `BSD_2_CLAUSE`<sup>Required</sup> <a name="BSD_2_CLAUSE" id="construct-hub.SpdxLicense.property.BSD_2_CLAUSE"></a>

```typescript
public readonly BSD_2_CLAUSE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 2-Clause "Simplified" License.

> [https://opensource.org/licenses/BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)

---

##### `BSD_2_CLAUSE_FREEBSD`<sup>Required</sup> <a name="BSD_2_CLAUSE_FREEBSD" id="construct-hub.SpdxLicense.property.BSD_2_CLAUSE_FREEBSD"></a>

```typescript
public readonly BSD_2_CLAUSE_FREEBSD: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 2-Clause FreeBSD License.

> [http://www.freebsd.org/copyright/freebsd-license.html](http://www.freebsd.org/copyright/freebsd-license.html)

---

##### `BSD_2_CLAUSE_NETBSD`<sup>Required</sup> <a name="BSD_2_CLAUSE_NETBSD" id="construct-hub.SpdxLicense.property.BSD_2_CLAUSE_NETBSD"></a>

```typescript
public readonly BSD_2_CLAUSE_NETBSD: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 2-Clause NetBSD License.

> [http://www.netbsd.org/about/redistribution.html#default](http://www.netbsd.org/about/redistribution.html#default)

---

##### `BSD_2_CLAUSE_PATENT`<sup>Required</sup> <a name="BSD_2_CLAUSE_PATENT" id="construct-hub.SpdxLicense.property.BSD_2_CLAUSE_PATENT"></a>

```typescript
public readonly BSD_2_CLAUSE_PATENT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD-2-Clause Plus Patent License.

> [https://opensource.org/licenses/BSDplusPatent](https://opensource.org/licenses/BSDplusPatent)

---

##### `BSD_2_CLAUSE_VIEWS`<sup>Required</sup> <a name="BSD_2_CLAUSE_VIEWS" id="construct-hub.SpdxLicense.property.BSD_2_CLAUSE_VIEWS"></a>

```typescript
public readonly BSD_2_CLAUSE_VIEWS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 2-Clause with views sentence.

> [http://www.freebsd.org/copyright/freebsd-license.html](http://www.freebsd.org/copyright/freebsd-license.html)

---

##### `BSD_3_CLAUSE`<sup>Required</sup> <a name="BSD_3_CLAUSE" id="construct-hub.SpdxLicense.property.BSD_3_CLAUSE"></a>

```typescript
public readonly BSD_3_CLAUSE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 3-Clause "New" or "Revised" License.

> [https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)

---

##### `BSD_3_CLAUSE_ATTRIBUTION`<sup>Required</sup> <a name="BSD_3_CLAUSE_ATTRIBUTION" id="construct-hub.SpdxLicense.property.BSD_3_CLAUSE_ATTRIBUTION"></a>

```typescript
public readonly BSD_3_CLAUSE_ATTRIBUTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD with attribution.

> [https://fedoraproject.org/wiki/Licensing/BSD_with_Attribution](https://fedoraproject.org/wiki/Licensing/BSD_with_Attribution)

---

##### `BSD_3_CLAUSE_CLEAR`<sup>Required</sup> <a name="BSD_3_CLAUSE_CLEAR" id="construct-hub.SpdxLicense.property.BSD_3_CLAUSE_CLEAR"></a>

```typescript
public readonly BSD_3_CLAUSE_CLEAR: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 3-Clause Clear License.

> [http://labs.metacarta.com/license-explanation.html#license](http://labs.metacarta.com/license-explanation.html#license)

---

##### `BSD_3_CLAUSE_LBNL`<sup>Required</sup> <a name="BSD_3_CLAUSE_LBNL" id="construct-hub.SpdxLicense.property.BSD_3_CLAUSE_LBNL"></a>

```typescript
public readonly BSD_3_CLAUSE_LBNL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Lawrence Berkeley National Labs BSD variant license.

> [https://fedoraproject.org/wiki/Licensing/LBNLBSD](https://fedoraproject.org/wiki/Licensing/LBNLBSD)

---

##### `BSD_3_CLAUSE_NO_NUCLEAR_LICENSE`<sup>Required</sup> <a name="BSD_3_CLAUSE_NO_NUCLEAR_LICENSE" id="construct-hub.SpdxLicense.property.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE"></a>

```typescript
public readonly BSD_3_CLAUSE_NO_NUCLEAR_LICENSE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 3-Clause No Nuclear License.

> [http://download.oracle.com/otn-pub/java/licenses/bsd.txt?AuthParam=1467140197_43d516ce1776bd08a58235a7785be1cc](http://download.oracle.com/otn-pub/java/licenses/bsd.txt?AuthParam=1467140197_43d516ce1776bd08a58235a7785be1cc)

---

##### `BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014`<sup>Required</sup> <a name="BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014" id="construct-hub.SpdxLicense.property.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014"></a>

```typescript
public readonly BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 3-Clause No Nuclear License 2014.

> [https://java.net/projects/javaeetutorial/pages/BerkeleyLicense](https://java.net/projects/javaeetutorial/pages/BerkeleyLicense)

---

##### `BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY`<sup>Required</sup> <a name="BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY" id="construct-hub.SpdxLicense.property.BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY"></a>

```typescript
public readonly BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 3-Clause No Nuclear Warranty.

> [https://jogamp.org/git/?p=gluegen.git;a=blob_plain;f=LICENSE.txt](https://jogamp.org/git/?p=gluegen.git;a=blob_plain;f=LICENSE.txt)

---

##### `BSD_3_CLAUSE_OPEN_MPI`<sup>Required</sup> <a name="BSD_3_CLAUSE_OPEN_MPI" id="construct-hub.SpdxLicense.property.BSD_3_CLAUSE_OPEN_MPI"></a>

```typescript
public readonly BSD_3_CLAUSE_OPEN_MPI: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 3-Clause Open MPI variant.

> [https://www.open-mpi.org/community/license.php](https://www.open-mpi.org/community/license.php)

---

##### `BSD_4_CLAUSE`<sup>Required</sup> <a name="BSD_4_CLAUSE" id="construct-hub.SpdxLicense.property.BSD_4_CLAUSE"></a>

```typescript
public readonly BSD_4_CLAUSE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD 4-Clause "Original" or "Old" License.

> [http://directory.fsf.org/wiki/License:BSD_4Clause](http://directory.fsf.org/wiki/License:BSD_4Clause)

---

##### `BSD_4_CLAUSE_UC`<sup>Required</sup> <a name="BSD_4_CLAUSE_UC" id="construct-hub.SpdxLicense.property.BSD_4_CLAUSE_UC"></a>

```typescript
public readonly BSD_4_CLAUSE_UC: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD-4-Clause (University of California-Specific).

> [http://www.freebsd.org/copyright/license.html](http://www.freebsd.org/copyright/license.html)

---

##### `BSD_PROTECTION`<sup>Required</sup> <a name="BSD_PROTECTION" id="construct-hub.SpdxLicense.property.BSD_PROTECTION"></a>

```typescript
public readonly BSD_PROTECTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD Protection License.

> [https://fedoraproject.org/wiki/Licensing/BSD_Protection_License](https://fedoraproject.org/wiki/Licensing/BSD_Protection_License)

---

##### `BSD_SOURCE_CODE`<sup>Required</sup> <a name="BSD_SOURCE_CODE" id="construct-hub.SpdxLicense.property.BSD_SOURCE_CODE"></a>

```typescript
public readonly BSD_SOURCE_CODE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD Source Code Attribution.

> [https://github.com/robbiehanson/CocoaHTTPServer/blob/master/LICENSE.txt](https://github.com/robbiehanson/CocoaHTTPServer/blob/master/LICENSE.txt)

---

##### `BSL_1_0`<sup>Required</sup> <a name="BSL_1_0" id="construct-hub.SpdxLicense.property.BSL_1_0"></a>

```typescript
public readonly BSL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Boost Software License 1.0.

> [http://www.boost.org/LICENSE_1_0.txt](http://www.boost.org/LICENSE_1_0.txt)

---

##### `BUSL_1_1`<sup>Required</sup> <a name="BUSL_1_1" id="construct-hub.SpdxLicense.property.BUSL_1_1"></a>

```typescript
public readonly BUSL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Business Source License 1.1.

> [https://mariadb.com/bsl11/](https://mariadb.com/bsl11/)

---

##### `BZIP2_1_0_5`<sup>Required</sup> <a name="BZIP2_1_0_5" id="construct-hub.SpdxLicense.property.BZIP2_1_0_5"></a>

```typescript
public readonly BZIP2_1_0_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

bzip2 and libbzip2 License v1.0.5.

> [https://sourceware.org/bzip2/1.0.5/bzip2-manual-1.0.5.html](https://sourceware.org/bzip2/1.0.5/bzip2-manual-1.0.5.html)

---

##### `BZIP2_1_0_6`<sup>Required</sup> <a name="BZIP2_1_0_6" id="construct-hub.SpdxLicense.property.BZIP2_1_0_6"></a>

```typescript
public readonly BZIP2_1_0_6: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

bzip2 and libbzip2 License v1.0.6.

> [https://sourceware.org/git/?p=bzip2.git;a=blob;f=LICENSE;hb=bzip2-1.0.6](https://sourceware.org/git/?p=bzip2.git;a=blob;f=LICENSE;hb=bzip2-1.0.6)

---

##### `CAL_1_0`<sup>Required</sup> <a name="CAL_1_0" id="construct-hub.SpdxLicense.property.CAL_1_0"></a>

```typescript
public readonly CAL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Cryptographic Autonomy License 1.0.

> [http://cryptographicautonomylicense.com/license-text.html](http://cryptographicautonomylicense.com/license-text.html)

---

##### `CAL_1_0_COMBINED_WORK_EXCEPTION`<sup>Required</sup> <a name="CAL_1_0_COMBINED_WORK_EXCEPTION" id="construct-hub.SpdxLicense.property.CAL_1_0_COMBINED_WORK_EXCEPTION"></a>

```typescript
public readonly CAL_1_0_COMBINED_WORK_EXCEPTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Cryptographic Autonomy License 1.0 (Combined Work Exception).

> [http://cryptographicautonomylicense.com/license-text.html](http://cryptographicautonomylicense.com/license-text.html)

---

##### `CALDERA`<sup>Required</sup> <a name="CALDERA" id="construct-hub.SpdxLicense.property.CALDERA"></a>

```typescript
public readonly CALDERA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Caldera License.

> [http://www.lemis.com/grog/UNIX/ancient-source-all.pdf](http://www.lemis.com/grog/UNIX/ancient-source-all.pdf)

---

##### `CATOSL_1_1`<sup>Required</sup> <a name="CATOSL_1_1" id="construct-hub.SpdxLicense.property.CATOSL_1_1"></a>

```typescript
public readonly CATOSL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Computer Associates Trusted Open Source License 1.1.

> [https://opensource.org/licenses/CATOSL-1.1](https://opensource.org/licenses/CATOSL-1.1)

---

##### `CC_BY_1_0`<sup>Required</sup> <a name="CC_BY_1_0" id="construct-hub.SpdxLicense.property.CC_BY_1_0"></a>

```typescript
public readonly CC_BY_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution 1.0 Generic.

> [https://creativecommons.org/licenses/by/1.0/legalcode](https://creativecommons.org/licenses/by/1.0/legalcode)

---

##### `CC_BY_2_0`<sup>Required</sup> <a name="CC_BY_2_0" id="construct-hub.SpdxLicense.property.CC_BY_2_0"></a>

```typescript
public readonly CC_BY_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution 2.0 Generic.

> [https://creativecommons.org/licenses/by/2.0/legalcode](https://creativecommons.org/licenses/by/2.0/legalcode)

---

##### `CC_BY_2_5`<sup>Required</sup> <a name="CC_BY_2_5" id="construct-hub.SpdxLicense.property.CC_BY_2_5"></a>

```typescript
public readonly CC_BY_2_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution 2.5 Generic.

> [https://creativecommons.org/licenses/by/2.5/legalcode](https://creativecommons.org/licenses/by/2.5/legalcode)

---

##### `CC_BY_3_0`<sup>Required</sup> <a name="CC_BY_3_0" id="construct-hub.SpdxLicense.property.CC_BY_3_0"></a>

```typescript
public readonly CC_BY_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution 3.0 Unported.

> [https://creativecommons.org/licenses/by/3.0/legalcode](https://creativecommons.org/licenses/by/3.0/legalcode)

---

##### `CC_BY_3_0_AT`<sup>Required</sup> <a name="CC_BY_3_0_AT" id="construct-hub.SpdxLicense.property.CC_BY_3_0_AT"></a>

```typescript
public readonly CC_BY_3_0_AT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution 3.0 Austria.

> [https://creativecommons.org/licenses/by/3.0/at/legalcode](https://creativecommons.org/licenses/by/3.0/at/legalcode)

---

##### `CC_BY_3_0_US`<sup>Required</sup> <a name="CC_BY_3_0_US" id="construct-hub.SpdxLicense.property.CC_BY_3_0_US"></a>

```typescript
public readonly CC_BY_3_0_US: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution 3.0 United States.

> [https://creativecommons.org/licenses/by/3.0/us/legalcode](https://creativecommons.org/licenses/by/3.0/us/legalcode)

---

##### `CC_BY_4_0`<sup>Required</sup> <a name="CC_BY_4_0" id="construct-hub.SpdxLicense.property.CC_BY_4_0"></a>

```typescript
public readonly CC_BY_4_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution 4.0 International.

> [https://creativecommons.org/licenses/by/4.0/legalcode](https://creativecommons.org/licenses/by/4.0/legalcode)

---

##### `CC_BY_NC_1_0`<sup>Required</sup> <a name="CC_BY_NC_1_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_1_0"></a>

```typescript
public readonly CC_BY_NC_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial 1.0 Generic.

> [https://creativecommons.org/licenses/by-nc/1.0/legalcode](https://creativecommons.org/licenses/by-nc/1.0/legalcode)

---

##### `CC_BY_NC_2_0`<sup>Required</sup> <a name="CC_BY_NC_2_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_2_0"></a>

```typescript
public readonly CC_BY_NC_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial 2.0 Generic.

> [https://creativecommons.org/licenses/by-nc/2.0/legalcode](https://creativecommons.org/licenses/by-nc/2.0/legalcode)

---

##### `CC_BY_NC_2_5`<sup>Required</sup> <a name="CC_BY_NC_2_5" id="construct-hub.SpdxLicense.property.CC_BY_NC_2_5"></a>

```typescript
public readonly CC_BY_NC_2_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial 2.5 Generic.

> [https://creativecommons.org/licenses/by-nc/2.5/legalcode](https://creativecommons.org/licenses/by-nc/2.5/legalcode)

---

##### `CC_BY_NC_3_0`<sup>Required</sup> <a name="CC_BY_NC_3_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_3_0"></a>

```typescript
public readonly CC_BY_NC_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial 3.0 Unported.

> [https://creativecommons.org/licenses/by-nc/3.0/legalcode](https://creativecommons.org/licenses/by-nc/3.0/legalcode)

---

##### `CC_BY_NC_4_0`<sup>Required</sup> <a name="CC_BY_NC_4_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_4_0"></a>

```typescript
public readonly CC_BY_NC_4_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial 4.0 International.

> [https://creativecommons.org/licenses/by-nc/4.0/legalcode](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

---

##### `CC_BY_NC_ND_1_0`<sup>Required</sup> <a name="CC_BY_NC_ND_1_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_ND_1_0"></a>

```typescript
public readonly CC_BY_NC_ND_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic.

> [https://creativecommons.org/licenses/by-nd-nc/1.0/legalcode](https://creativecommons.org/licenses/by-nd-nc/1.0/legalcode)

---

##### `CC_BY_NC_ND_2_0`<sup>Required</sup> <a name="CC_BY_NC_ND_2_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_ND_2_0"></a>

```typescript
public readonly CC_BY_NC_ND_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic.

> [https://creativecommons.org/licenses/by-nc-nd/2.0/legalcode](https://creativecommons.org/licenses/by-nc-nd/2.0/legalcode)

---

##### `CC_BY_NC_ND_2_5`<sup>Required</sup> <a name="CC_BY_NC_ND_2_5" id="construct-hub.SpdxLicense.property.CC_BY_NC_ND_2_5"></a>

```typescript
public readonly CC_BY_NC_ND_2_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic.

> [https://creativecommons.org/licenses/by-nc-nd/2.5/legalcode](https://creativecommons.org/licenses/by-nc-nd/2.5/legalcode)

---

##### `CC_BY_NC_ND_3_0`<sup>Required</sup> <a name="CC_BY_NC_ND_3_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_ND_3_0"></a>

```typescript
public readonly CC_BY_NC_ND_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported.

> [https://creativecommons.org/licenses/by-nc-nd/3.0/legalcode](https://creativecommons.org/licenses/by-nc-nd/3.0/legalcode)

---

##### `CC_BY_NC_ND_3_0_IGO`<sup>Required</sup> <a name="CC_BY_NC_ND_3_0_IGO" id="construct-hub.SpdxLicense.property.CC_BY_NC_ND_3_0_IGO"></a>

```typescript
public readonly CC_BY_NC_ND_3_0_IGO: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial No Derivatives 3.0 IGO.

> [https://creativecommons.org/licenses/by-nc-nd/3.0/igo/legalcode](https://creativecommons.org/licenses/by-nc-nd/3.0/igo/legalcode)

---

##### `CC_BY_NC_ND_4_0`<sup>Required</sup> <a name="CC_BY_NC_ND_4_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_ND_4_0"></a>

```typescript
public readonly CC_BY_NC_ND_4_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial No Derivatives 4.0 International.

> [https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode)

---

##### `CC_BY_NC_SA_1_0`<sup>Required</sup> <a name="CC_BY_NC_SA_1_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_SA_1_0"></a>

```typescript
public readonly CC_BY_NC_SA_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial Share Alike 1.0 Generic.

> [https://creativecommons.org/licenses/by-nc-sa/1.0/legalcode](https://creativecommons.org/licenses/by-nc-sa/1.0/legalcode)

---

##### `CC_BY_NC_SA_2_0`<sup>Required</sup> <a name="CC_BY_NC_SA_2_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_SA_2_0"></a>

```typescript
public readonly CC_BY_NC_SA_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial Share Alike 2.0 Generic.

> [https://creativecommons.org/licenses/by-nc-sa/2.0/legalcode](https://creativecommons.org/licenses/by-nc-sa/2.0/legalcode)

---

##### `CC_BY_NC_SA_2_5`<sup>Required</sup> <a name="CC_BY_NC_SA_2_5" id="construct-hub.SpdxLicense.property.CC_BY_NC_SA_2_5"></a>

```typescript
public readonly CC_BY_NC_SA_2_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial Share Alike 2.5 Generic.

> [https://creativecommons.org/licenses/by-nc-sa/2.5/legalcode](https://creativecommons.org/licenses/by-nc-sa/2.5/legalcode)

---

##### `CC_BY_NC_SA_3_0`<sup>Required</sup> <a name="CC_BY_NC_SA_3_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_SA_3_0"></a>

```typescript
public readonly CC_BY_NC_SA_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial Share Alike 3.0 Unported.

> [https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode](https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode)

---

##### `CC_BY_NC_SA_4_0`<sup>Required</sup> <a name="CC_BY_NC_SA_4_0" id="construct-hub.SpdxLicense.property.CC_BY_NC_SA_4_0"></a>

```typescript
public readonly CC_BY_NC_SA_4_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Non Commercial Share Alike 4.0 International.

> [https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)

---

##### `CC_BY_ND_1_0`<sup>Required</sup> <a name="CC_BY_ND_1_0" id="construct-hub.SpdxLicense.property.CC_BY_ND_1_0"></a>

```typescript
public readonly CC_BY_ND_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution No Derivatives 1.0 Generic.

> [https://creativecommons.org/licenses/by-nd/1.0/legalcode](https://creativecommons.org/licenses/by-nd/1.0/legalcode)

---

##### `CC_BY_ND_2_0`<sup>Required</sup> <a name="CC_BY_ND_2_0" id="construct-hub.SpdxLicense.property.CC_BY_ND_2_0"></a>

```typescript
public readonly CC_BY_ND_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution No Derivatives 2.0 Generic.

> [https://creativecommons.org/licenses/by-nd/2.0/legalcode](https://creativecommons.org/licenses/by-nd/2.0/legalcode)

---

##### `CC_BY_ND_2_5`<sup>Required</sup> <a name="CC_BY_ND_2_5" id="construct-hub.SpdxLicense.property.CC_BY_ND_2_5"></a>

```typescript
public readonly CC_BY_ND_2_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution No Derivatives 2.5 Generic.

> [https://creativecommons.org/licenses/by-nd/2.5/legalcode](https://creativecommons.org/licenses/by-nd/2.5/legalcode)

---

##### `CC_BY_ND_3_0`<sup>Required</sup> <a name="CC_BY_ND_3_0" id="construct-hub.SpdxLicense.property.CC_BY_ND_3_0"></a>

```typescript
public readonly CC_BY_ND_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution No Derivatives 3.0 Unported.

> [https://creativecommons.org/licenses/by-nd/3.0/legalcode](https://creativecommons.org/licenses/by-nd/3.0/legalcode)

---

##### `CC_BY_ND_4_0`<sup>Required</sup> <a name="CC_BY_ND_4_0" id="construct-hub.SpdxLicense.property.CC_BY_ND_4_0"></a>

```typescript
public readonly CC_BY_ND_4_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution No Derivatives 4.0 International.

> [https://creativecommons.org/licenses/by-nd/4.0/legalcode](https://creativecommons.org/licenses/by-nd/4.0/legalcode)

---

##### `CC_BY_SA_1_0`<sup>Required</sup> <a name="CC_BY_SA_1_0" id="construct-hub.SpdxLicense.property.CC_BY_SA_1_0"></a>

```typescript
public readonly CC_BY_SA_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Share Alike 1.0 Generic.

> [https://creativecommons.org/licenses/by-sa/1.0/legalcode](https://creativecommons.org/licenses/by-sa/1.0/legalcode)

---

##### `CC_BY_SA_2_0`<sup>Required</sup> <a name="CC_BY_SA_2_0" id="construct-hub.SpdxLicense.property.CC_BY_SA_2_0"></a>

```typescript
public readonly CC_BY_SA_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Share Alike 2.0 Generic.

> [https://creativecommons.org/licenses/by-sa/2.0/legalcode](https://creativecommons.org/licenses/by-sa/2.0/legalcode)

---

##### `CC_BY_SA_2_0_UK`<sup>Required</sup> <a name="CC_BY_SA_2_0_UK" id="construct-hub.SpdxLicense.property.CC_BY_SA_2_0_UK"></a>

```typescript
public readonly CC_BY_SA_2_0_UK: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Share Alike 2.0 England and Wales.

> [https://creativecommons.org/licenses/by-sa/2.0/uk/legalcode](https://creativecommons.org/licenses/by-sa/2.0/uk/legalcode)

---

##### `CC_BY_SA_2_5`<sup>Required</sup> <a name="CC_BY_SA_2_5" id="construct-hub.SpdxLicense.property.CC_BY_SA_2_5"></a>

```typescript
public readonly CC_BY_SA_2_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Share Alike 2.5 Generic.

> [https://creativecommons.org/licenses/by-sa/2.5/legalcode](https://creativecommons.org/licenses/by-sa/2.5/legalcode)

---

##### `CC_BY_SA_3_0`<sup>Required</sup> <a name="CC_BY_SA_3_0" id="construct-hub.SpdxLicense.property.CC_BY_SA_3_0"></a>

```typescript
public readonly CC_BY_SA_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Share Alike 3.0 Unported.

> [https://creativecommons.org/licenses/by-sa/3.0/legalcode](https://creativecommons.org/licenses/by-sa/3.0/legalcode)

---

##### `CC_BY_SA_3_0_AT`<sup>Required</sup> <a name="CC_BY_SA_3_0_AT" id="construct-hub.SpdxLicense.property.CC_BY_SA_3_0_AT"></a>

```typescript
public readonly CC_BY_SA_3_0_AT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution-Share Alike 3.0 Austria.

> [https://creativecommons.org/licenses/by-sa/3.0/at/legalcode](https://creativecommons.org/licenses/by-sa/3.0/at/legalcode)

---

##### `CC_BY_SA_4_0`<sup>Required</sup> <a name="CC_BY_SA_4_0" id="construct-hub.SpdxLicense.property.CC_BY_SA_4_0"></a>

```typescript
public readonly CC_BY_SA_4_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Attribution Share Alike 4.0 International.

> [https://creativecommons.org/licenses/by-sa/4.0/legalcode](https://creativecommons.org/licenses/by-sa/4.0/legalcode)

---

##### `CC_PDDC`<sup>Required</sup> <a name="CC_PDDC" id="construct-hub.SpdxLicense.property.CC_PDDC"></a>

```typescript
public readonly CC_PDDC: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Public Domain Dedication and Certification.

> [https://creativecommons.org/licenses/publicdomain/](https://creativecommons.org/licenses/publicdomain/)

---

##### `CC0_1_0`<sup>Required</sup> <a name="CC0_1_0" id="construct-hub.SpdxLicense.property.CC0_1_0"></a>

```typescript
public readonly CC0_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Creative Commons Zero v1.0 Universal.

> [https://creativecommons.org/publicdomain/zero/1.0/legalcode](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

---

##### `CDDL_1_0`<sup>Required</sup> <a name="CDDL_1_0" id="construct-hub.SpdxLicense.property.CDDL_1_0"></a>

```typescript
public readonly CDDL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Common Development and Distribution License 1.0.

> [https://opensource.org/licenses/cddl1](https://opensource.org/licenses/cddl1)

---

##### `CDDL_1_1`<sup>Required</sup> <a name="CDDL_1_1" id="construct-hub.SpdxLicense.property.CDDL_1_1"></a>

```typescript
public readonly CDDL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Common Development and Distribution License 1.1.

> [http://glassfish.java.net/public/CDDL+GPL_1_1.html](http://glassfish.java.net/public/CDDL+GPL_1_1.html)

---

##### `CDLA_PERMISSIVE_1_0`<sup>Required</sup> <a name="CDLA_PERMISSIVE_1_0" id="construct-hub.SpdxLicense.property.CDLA_PERMISSIVE_1_0"></a>

```typescript
public readonly CDLA_PERMISSIVE_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Community Data License Agreement Permissive 1.0.

> [https://cdla.io/permissive-1-0](https://cdla.io/permissive-1-0)

---

##### `CDLA_SHARING_1_0`<sup>Required</sup> <a name="CDLA_SHARING_1_0" id="construct-hub.SpdxLicense.property.CDLA_SHARING_1_0"></a>

```typescript
public readonly CDLA_SHARING_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Community Data License Agreement Sharing 1.0.

> [https://cdla.io/sharing-1-0](https://cdla.io/sharing-1-0)

---

##### `CECILL_1_0`<sup>Required</sup> <a name="CECILL_1_0" id="construct-hub.SpdxLicense.property.CECILL_1_0"></a>

```typescript
public readonly CECILL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CeCILL Free Software License Agreement v1.0.

> [http://www.cecill.info/licences/Licence_CeCILL_V1-fr.html](http://www.cecill.info/licences/Licence_CeCILL_V1-fr.html)

---

##### `CECILL_1_1`<sup>Required</sup> <a name="CECILL_1_1" id="construct-hub.SpdxLicense.property.CECILL_1_1"></a>

```typescript
public readonly CECILL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CeCILL Free Software License Agreement v1.1.

> [http://www.cecill.info/licences/Licence_CeCILL_V1.1-US.html](http://www.cecill.info/licences/Licence_CeCILL_V1.1-US.html)

---

##### `CECILL_2_0`<sup>Required</sup> <a name="CECILL_2_0" id="construct-hub.SpdxLicense.property.CECILL_2_0"></a>

```typescript
public readonly CECILL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CeCILL Free Software License Agreement v2.0.

> [http://www.cecill.info/licences/Licence_CeCILL_V2-en.html](http://www.cecill.info/licences/Licence_CeCILL_V2-en.html)

---

##### `CECILL_2_1`<sup>Required</sup> <a name="CECILL_2_1" id="construct-hub.SpdxLicense.property.CECILL_2_1"></a>

```typescript
public readonly CECILL_2_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CeCILL Free Software License Agreement v2.1.

> [http://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html](http://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html)

---

##### `CECILL_B`<sup>Required</sup> <a name="CECILL_B" id="construct-hub.SpdxLicense.property.CECILL_B"></a>

```typescript
public readonly CECILL_B: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CeCILL-B Free Software License Agreement.

> [http://www.cecill.info/licences/Licence_CeCILL-B_V1-en.html](http://www.cecill.info/licences/Licence_CeCILL-B_V1-en.html)

---

##### `CECILL_C`<sup>Required</sup> <a name="CECILL_C" id="construct-hub.SpdxLicense.property.CECILL_C"></a>

```typescript
public readonly CECILL_C: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CeCILL-C Free Software License Agreement.

> [http://www.cecill.info/licences/Licence_CeCILL-C_V1-en.html](http://www.cecill.info/licences/Licence_CeCILL-C_V1-en.html)

---

##### `CERN_OHL_1_1`<sup>Required</sup> <a name="CERN_OHL_1_1" id="construct-hub.SpdxLicense.property.CERN_OHL_1_1"></a>

```typescript
public readonly CERN_OHL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CERN Open Hardware Licence v1.1.

> [https://www.ohwr.org/project/licenses/wikis/cern-ohl-v1.1](https://www.ohwr.org/project/licenses/wikis/cern-ohl-v1.1)

---

##### `CERN_OHL_1_2`<sup>Required</sup> <a name="CERN_OHL_1_2" id="construct-hub.SpdxLicense.property.CERN_OHL_1_2"></a>

```typescript
public readonly CERN_OHL_1_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CERN Open Hardware Licence v1.2.

> [https://www.ohwr.org/project/licenses/wikis/cern-ohl-v1.2](https://www.ohwr.org/project/licenses/wikis/cern-ohl-v1.2)

---

##### `CERN_OHL_P_2_0`<sup>Required</sup> <a name="CERN_OHL_P_2_0" id="construct-hub.SpdxLicense.property.CERN_OHL_P_2_0"></a>

```typescript
public readonly CERN_OHL_P_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CERN Open Hardware Licence Version 2 - Permissive.

> [https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2](https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2)

---

##### `CERN_OHL_S_2_0`<sup>Required</sup> <a name="CERN_OHL_S_2_0" id="construct-hub.SpdxLicense.property.CERN_OHL_S_2_0"></a>

```typescript
public readonly CERN_OHL_S_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CERN Open Hardware Licence Version 2 - Strongly Reciprocal.

> [https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2](https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2)

---

##### `CERN_OHL_W_2_0`<sup>Required</sup> <a name="CERN_OHL_W_2_0" id="construct-hub.SpdxLicense.property.CERN_OHL_W_2_0"></a>

```typescript
public readonly CERN_OHL_W_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CERN Open Hardware Licence Version 2 - Weakly Reciprocal.

> [https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2](https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2)

---

##### `CL_ARTISTIC`<sup>Required</sup> <a name="CL_ARTISTIC" id="construct-hub.SpdxLicense.property.CL_ARTISTIC"></a>

```typescript
public readonly CL_ARTISTIC: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Clarified Artistic License.

> [http://gianluca.dellavedova.org/2011/01/03/clarified-artistic-license/](http://gianluca.dellavedova.org/2011/01/03/clarified-artistic-license/)

---

##### `CNRI_JYTHON`<sup>Required</sup> <a name="CNRI_JYTHON" id="construct-hub.SpdxLicense.property.CNRI_JYTHON"></a>

```typescript
public readonly CNRI_JYTHON: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CNRI Jython License.

> [http://www.jython.org/license.html](http://www.jython.org/license.html)

---

##### `CNRI_PYTHON`<sup>Required</sup> <a name="CNRI_PYTHON" id="construct-hub.SpdxLicense.property.CNRI_PYTHON"></a>

```typescript
public readonly CNRI_PYTHON: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CNRI Python License.

> [https://opensource.org/licenses/CNRI-Python](https://opensource.org/licenses/CNRI-Python)

---

##### `CNRI_PYTHON_GPL_COMPATIBLE`<sup>Required</sup> <a name="CNRI_PYTHON_GPL_COMPATIBLE" id="construct-hub.SpdxLicense.property.CNRI_PYTHON_GPL_COMPATIBLE"></a>

```typescript
public readonly CNRI_PYTHON_GPL_COMPATIBLE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CNRI Python Open Source GPL Compatible License Agreement.

> [http://www.python.org/download/releases/1.6.1/download_win/](http://www.python.org/download/releases/1.6.1/download_win/)

---

##### `CONDOR_1_1`<sup>Required</sup> <a name="CONDOR_1_1" id="construct-hub.SpdxLicense.property.CONDOR_1_1"></a>

```typescript
public readonly CONDOR_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Condor Public License v1.1.

> [http://research.cs.wisc.edu/condor/license.html#condor](http://research.cs.wisc.edu/condor/license.html#condor)

---

##### `COPYLEFT_NEXT_0_3_0`<sup>Required</sup> <a name="COPYLEFT_NEXT_0_3_0" id="construct-hub.SpdxLicense.property.COPYLEFT_NEXT_0_3_0"></a>

```typescript
public readonly COPYLEFT_NEXT_0_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

copyleft-next 0.3.0.

> [https://github.com/copyleft-next/copyleft-next/blob/master/Releases/copyleft-next-0.3.0](https://github.com/copyleft-next/copyleft-next/blob/master/Releases/copyleft-next-0.3.0)

---

##### `COPYLEFT_NEXT_0_3_1`<sup>Required</sup> <a name="COPYLEFT_NEXT_0_3_1" id="construct-hub.SpdxLicense.property.COPYLEFT_NEXT_0_3_1"></a>

```typescript
public readonly COPYLEFT_NEXT_0_3_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

copyleft-next 0.3.1.

> [https://github.com/copyleft-next/copyleft-next/blob/master/Releases/copyleft-next-0.3.1](https://github.com/copyleft-next/copyleft-next/blob/master/Releases/copyleft-next-0.3.1)

---

##### `CPAL_1_0`<sup>Required</sup> <a name="CPAL_1_0" id="construct-hub.SpdxLicense.property.CPAL_1_0"></a>

```typescript
public readonly CPAL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Common Public Attribution License 1.0.

> [https://opensource.org/licenses/CPAL-1.0](https://opensource.org/licenses/CPAL-1.0)

---

##### `CPL_1_0`<sup>Required</sup> <a name="CPL_1_0" id="construct-hub.SpdxLicense.property.CPL_1_0"></a>

```typescript
public readonly CPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Common Public License 1.0.

> [https://opensource.org/licenses/CPL-1.0](https://opensource.org/licenses/CPL-1.0)

---

##### `CPOL_1_02`<sup>Required</sup> <a name="CPOL_1_02" id="construct-hub.SpdxLicense.property.CPOL_1_02"></a>

```typescript
public readonly CPOL_1_02: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Code Project Open License 1.02.

> [http://www.codeproject.com/info/cpol10.aspx](http://www.codeproject.com/info/cpol10.aspx)

---

##### `CROSSWORD`<sup>Required</sup> <a name="CROSSWORD" id="construct-hub.SpdxLicense.property.CROSSWORD"></a>

```typescript
public readonly CROSSWORD: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Crossword License.

> [https://fedoraproject.org/wiki/Licensing/Crossword](https://fedoraproject.org/wiki/Licensing/Crossword)

---

##### `CRYSTAL_STACKER`<sup>Required</sup> <a name="CRYSTAL_STACKER" id="construct-hub.SpdxLicense.property.CRYSTAL_STACKER"></a>

```typescript
public readonly CRYSTAL_STACKER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CrystalStacker License.

> [https://fedoraproject.org/wiki/Licensing:CrystalStacker?rd=Licensing/CrystalStacker](https://fedoraproject.org/wiki/Licensing:CrystalStacker?rd=Licensing/CrystalStacker)

---

##### `CUA_OPL_1_0`<sup>Required</sup> <a name="CUA_OPL_1_0" id="construct-hub.SpdxLicense.property.CUA_OPL_1_0"></a>

```typescript
public readonly CUA_OPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CUA Office Public License v1.0.

> [https://opensource.org/licenses/CUA-OPL-1.0](https://opensource.org/licenses/CUA-OPL-1.0)

---

##### `CUBE`<sup>Required</sup> <a name="CUBE" id="construct-hub.SpdxLicense.property.CUBE"></a>

```typescript
public readonly CUBE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Cube License.

> [https://fedoraproject.org/wiki/Licensing/Cube](https://fedoraproject.org/wiki/Licensing/Cube)

---

##### `CURL`<sup>Required</sup> <a name="CURL" id="construct-hub.SpdxLicense.property.CURL"></a>

```typescript
public readonly CURL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

curl License.

> [https://github.com/bagder/curl/blob/master/COPYING](https://github.com/bagder/curl/blob/master/COPYING)

---

##### `D_FSL_1_0`<sup>Required</sup> <a name="D_FSL_1_0" id="construct-hub.SpdxLicense.property.D_FSL_1_0"></a>

```typescript
public readonly D_FSL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Deutsche Freie Software Lizenz.

> [http://www.dipp.nrw.de/d-fsl/lizenzen/](http://www.dipp.nrw.de/d-fsl/lizenzen/)

---

##### `DIFFMARK`<sup>Required</sup> <a name="DIFFMARK" id="construct-hub.SpdxLicense.property.DIFFMARK"></a>

```typescript
public readonly DIFFMARK: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

diffmark license.

> [https://fedoraproject.org/wiki/Licensing/diffmark](https://fedoraproject.org/wiki/Licensing/diffmark)

---

##### `DOC`<sup>Required</sup> <a name="DOC" id="construct-hub.SpdxLicense.property.DOC"></a>

```typescript
public readonly DOC: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

DOC License.

> [http://www.cs.wustl.edu/~schmidt/ACE-copying.html](http://www.cs.wustl.edu/~schmidt/ACE-copying.html)

---

##### `DOTSEQN`<sup>Required</sup> <a name="DOTSEQN" id="construct-hub.SpdxLicense.property.DOTSEQN"></a>

```typescript
public readonly DOTSEQN: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Dotseqn License.

> [https://fedoraproject.org/wiki/Licensing/Dotseqn](https://fedoraproject.org/wiki/Licensing/Dotseqn)

---

##### `DSDP`<sup>Required</sup> <a name="DSDP" id="construct-hub.SpdxLicense.property.DSDP"></a>

```typescript
public readonly DSDP: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

DSDP License.

> [https://fedoraproject.org/wiki/Licensing/DSDP](https://fedoraproject.org/wiki/Licensing/DSDP)

---

##### `DVIPDFM`<sup>Required</sup> <a name="DVIPDFM" id="construct-hub.SpdxLicense.property.DVIPDFM"></a>

```typescript
public readonly DVIPDFM: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

dvipdfm License.

> [https://fedoraproject.org/wiki/Licensing/dvipdfm](https://fedoraproject.org/wiki/Licensing/dvipdfm)

---

##### `E_GENIX`<sup>Required</sup> <a name="E_GENIX" id="construct-hub.SpdxLicense.property.E_GENIX"></a>

```typescript
public readonly E_GENIX: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

eGenix.com Public License 1.1.0.

> [http://www.egenix.com/products/eGenix.com-Public-License-1.1.0.pdf](http://www.egenix.com/products/eGenix.com-Public-License-1.1.0.pdf)

---

##### `ECL_1_0`<sup>Required</sup> <a name="ECL_1_0" id="construct-hub.SpdxLicense.property.ECL_1_0"></a>

```typescript
public readonly ECL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Educational Community License v1.0.

> [https://opensource.org/licenses/ECL-1.0](https://opensource.org/licenses/ECL-1.0)

---

##### `ECL_2_0`<sup>Required</sup> <a name="ECL_2_0" id="construct-hub.SpdxLicense.property.ECL_2_0"></a>

```typescript
public readonly ECL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Educational Community License v2.0.

> [https://opensource.org/licenses/ECL-2.0](https://opensource.org/licenses/ECL-2.0)

---

##### `ECOS_2_0`<sup>Required</sup> <a name="ECOS_2_0" id="construct-hub.SpdxLicense.property.ECOS_2_0"></a>

```typescript
public readonly ECOS_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

eCos license version 2.0.

> [https://www.gnu.org/licenses/ecos-license.html](https://www.gnu.org/licenses/ecos-license.html)

---

##### `EFL_1_0`<sup>Required</sup> <a name="EFL_1_0" id="construct-hub.SpdxLicense.property.EFL_1_0"></a>

```typescript
public readonly EFL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Eiffel Forum License v1.0.

> [http://www.eiffel-nice.org/license/forum.txt](http://www.eiffel-nice.org/license/forum.txt)

---

##### `EFL_2_0`<sup>Required</sup> <a name="EFL_2_0" id="construct-hub.SpdxLicense.property.EFL_2_0"></a>

```typescript
public readonly EFL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Eiffel Forum License v2.0.

> [http://www.eiffel-nice.org/license/eiffel-forum-license-2.html](http://www.eiffel-nice.org/license/eiffel-forum-license-2.html)

---

##### `ENTESSA`<sup>Required</sup> <a name="ENTESSA" id="construct-hub.SpdxLicense.property.ENTESSA"></a>

```typescript
public readonly ENTESSA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Entessa Public License v1.0.

> [https://opensource.org/licenses/Entessa](https://opensource.org/licenses/Entessa)

---

##### `EPICS`<sup>Required</sup> <a name="EPICS" id="construct-hub.SpdxLicense.property.EPICS"></a>

```typescript
public readonly EPICS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

EPICS Open License.

> [https://epics.anl.gov/license/open.php](https://epics.anl.gov/license/open.php)

---

##### `EPL_1_0`<sup>Required</sup> <a name="EPL_1_0" id="construct-hub.SpdxLicense.property.EPL_1_0"></a>

```typescript
public readonly EPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Eclipse Public License 1.0.

> [http://www.eclipse.org/legal/epl-v10.html](http://www.eclipse.org/legal/epl-v10.html)

---

##### `EPL_2_0`<sup>Required</sup> <a name="EPL_2_0" id="construct-hub.SpdxLicense.property.EPL_2_0"></a>

```typescript
public readonly EPL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Eclipse Public License 2.0.

> [https://www.eclipse.org/legal/epl-2.0](https://www.eclipse.org/legal/epl-2.0)

---

##### `ERLPL_1_1`<sup>Required</sup> <a name="ERLPL_1_1" id="construct-hub.SpdxLicense.property.ERLPL_1_1"></a>

```typescript
public readonly ERLPL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Erlang Public License v1.1.

> [http://www.erlang.org/EPLICENSE](http://www.erlang.org/EPLICENSE)

---

##### `ETALAB_2_0`<sup>Required</sup> <a name="ETALAB_2_0" id="construct-hub.SpdxLicense.property.ETALAB_2_0"></a>

```typescript
public readonly ETALAB_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Etalab Open License 2.0.

> [https://github.com/DISIC/politique-de-contribution-open-source/blob/master/LICENSE.pdf](https://github.com/DISIC/politique-de-contribution-open-source/blob/master/LICENSE.pdf)

---

##### `EUDATAGRID`<sup>Required</sup> <a name="EUDATAGRID" id="construct-hub.SpdxLicense.property.EUDATAGRID"></a>

```typescript
public readonly EUDATAGRID: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

EU DataGrid Software License.

> [http://eu-datagrid.web.cern.ch/eu-datagrid/license.html](http://eu-datagrid.web.cern.ch/eu-datagrid/license.html)

---

##### `EUPL_1_0`<sup>Required</sup> <a name="EUPL_1_0" id="construct-hub.SpdxLicense.property.EUPL_1_0"></a>

```typescript
public readonly EUPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

European Union Public License 1.0.

> [http://ec.europa.eu/idabc/en/document/7330.html](http://ec.europa.eu/idabc/en/document/7330.html)

---

##### `EUPL_1_1`<sup>Required</sup> <a name="EUPL_1_1" id="construct-hub.SpdxLicense.property.EUPL_1_1"></a>

```typescript
public readonly EUPL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

European Union Public License 1.1.

> [https://joinup.ec.europa.eu/software/page/eupl/licence-eupl](https://joinup.ec.europa.eu/software/page/eupl/licence-eupl)

---

##### `EUPL_1_2`<sup>Required</sup> <a name="EUPL_1_2" id="construct-hub.SpdxLicense.property.EUPL_1_2"></a>

```typescript
public readonly EUPL_1_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

European Union Public License 1.2.

> [https://joinup.ec.europa.eu/page/eupl-text-11-12](https://joinup.ec.europa.eu/page/eupl-text-11-12)

---

##### `EUROSYM`<sup>Required</sup> <a name="EUROSYM" id="construct-hub.SpdxLicense.property.EUROSYM"></a>

```typescript
public readonly EUROSYM: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Eurosym License.

> [https://fedoraproject.org/wiki/Licensing/Eurosym](https://fedoraproject.org/wiki/Licensing/Eurosym)

---

##### `FAIR`<sup>Required</sup> <a name="FAIR" id="construct-hub.SpdxLicense.property.FAIR"></a>

```typescript
public readonly FAIR: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Fair License.

> [http://fairlicense.org/](http://fairlicense.org/)

---

##### `FRAMEWORX_1_0`<sup>Required</sup> <a name="FRAMEWORX_1_0" id="construct-hub.SpdxLicense.property.FRAMEWORX_1_0"></a>

```typescript
public readonly FRAMEWORX_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Frameworx Open License 1.0.

> [https://opensource.org/licenses/Frameworx-1.0](https://opensource.org/licenses/Frameworx-1.0)

---

##### `FREE_IMAGE`<sup>Required</sup> <a name="FREE_IMAGE" id="construct-hub.SpdxLicense.property.FREE_IMAGE"></a>

```typescript
public readonly FREE_IMAGE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

FreeImage Public License v1.0.

> [http://freeimage.sourceforge.net/freeimage-license.txt](http://freeimage.sourceforge.net/freeimage-license.txt)

---

##### `FSFAP`<sup>Required</sup> <a name="FSFAP" id="construct-hub.SpdxLicense.property.FSFAP"></a>

```typescript
public readonly FSFAP: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

FSF All Permissive License.

> [https://www.gnu.org/prep/maintain/html_node/License-Notices-for-Other-Files.html](https://www.gnu.org/prep/maintain/html_node/License-Notices-for-Other-Files.html)

---

##### `FSFUL`<sup>Required</sup> <a name="FSFUL" id="construct-hub.SpdxLicense.property.FSFUL"></a>

```typescript
public readonly FSFUL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

FSF Unlimited License.

> [https://fedoraproject.org/wiki/Licensing/FSF_Unlimited_License](https://fedoraproject.org/wiki/Licensing/FSF_Unlimited_License)

---

##### `FSFULLR`<sup>Required</sup> <a name="FSFULLR" id="construct-hub.SpdxLicense.property.FSFULLR"></a>

```typescript
public readonly FSFULLR: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

FSF Unlimited License (with License Retention).

> [https://fedoraproject.org/wiki/Licensing/FSF_Unlimited_License#License_Retention_Variant](https://fedoraproject.org/wiki/Licensing/FSF_Unlimited_License#License_Retention_Variant)

---

##### `FTL`<sup>Required</sup> <a name="FTL" id="construct-hub.SpdxLicense.property.FTL"></a>

```typescript
public readonly FTL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Freetype Project License.

> [http://freetype.fis.uniroma2.it/FTL.TXT](http://freetype.fis.uniroma2.it/FTL.TXT)

---

##### `GFDL_1_1`<sup>Required</sup> <a name="GFDL_1_1" id="construct-hub.SpdxLicense.property.GFDL_1_1"></a>

```typescript
public readonly GFDL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.1.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt)

---

##### `GFDL_1_1_INVARIANTS_ONLY`<sup>Required</sup> <a name="GFDL_1_1_INVARIANTS_ONLY" id="construct-hub.SpdxLicense.property.GFDL_1_1_INVARIANTS_ONLY"></a>

```typescript
public readonly GFDL_1_1_INVARIANTS_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.1 only - invariants.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt)

---

##### `GFDL_1_1_INVARIANTS_OR_LATER`<sup>Required</sup> <a name="GFDL_1_1_INVARIANTS_OR_LATER" id="construct-hub.SpdxLicense.property.GFDL_1_1_INVARIANTS_OR_LATER"></a>

```typescript
public readonly GFDL_1_1_INVARIANTS_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.1 or later - invariants.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt)

---

##### `GFDL_1_1_NO_INVARIANTS_ONLY`<sup>Required</sup> <a name="GFDL_1_1_NO_INVARIANTS_ONLY" id="construct-hub.SpdxLicense.property.GFDL_1_1_NO_INVARIANTS_ONLY"></a>

```typescript
public readonly GFDL_1_1_NO_INVARIANTS_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.1 only - no invariants.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt)

---

##### `GFDL_1_1_NO_INVARIANTS_OR_LATER`<sup>Required</sup> <a name="GFDL_1_1_NO_INVARIANTS_OR_LATER" id="construct-hub.SpdxLicense.property.GFDL_1_1_NO_INVARIANTS_OR_LATER"></a>

```typescript
public readonly GFDL_1_1_NO_INVARIANTS_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.1 or later - no invariants.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt)

---

##### `GFDL_1_1_ONLY`<sup>Required</sup> <a name="GFDL_1_1_ONLY" id="construct-hub.SpdxLicense.property.GFDL_1_1_ONLY"></a>

```typescript
public readonly GFDL_1_1_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.1 only.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt)

---

##### `GFDL_1_1_OR_LATER`<sup>Required</sup> <a name="GFDL_1_1_OR_LATER" id="construct-hub.SpdxLicense.property.GFDL_1_1_OR_LATER"></a>

```typescript
public readonly GFDL_1_1_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.1 or later.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt)

---

##### `GFDL_1_2`<sup>Required</sup> <a name="GFDL_1_2" id="construct-hub.SpdxLicense.property.GFDL_1_2"></a>

```typescript
public readonly GFDL_1_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.2.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt)

---

##### `GFDL_1_2_INVARIANTS_ONLY`<sup>Required</sup> <a name="GFDL_1_2_INVARIANTS_ONLY" id="construct-hub.SpdxLicense.property.GFDL_1_2_INVARIANTS_ONLY"></a>

```typescript
public readonly GFDL_1_2_INVARIANTS_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.2 only - invariants.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt)

---

##### `GFDL_1_2_INVARIANTS_OR_LATER`<sup>Required</sup> <a name="GFDL_1_2_INVARIANTS_OR_LATER" id="construct-hub.SpdxLicense.property.GFDL_1_2_INVARIANTS_OR_LATER"></a>

```typescript
public readonly GFDL_1_2_INVARIANTS_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.2 or later - invariants.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt)

---

##### `GFDL_1_2_NO_INVARIANTS_ONLY`<sup>Required</sup> <a name="GFDL_1_2_NO_INVARIANTS_ONLY" id="construct-hub.SpdxLicense.property.GFDL_1_2_NO_INVARIANTS_ONLY"></a>

```typescript
public readonly GFDL_1_2_NO_INVARIANTS_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.2 only - no invariants.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt)

---

##### `GFDL_1_2_NO_INVARIANTS_OR_LATER`<sup>Required</sup> <a name="GFDL_1_2_NO_INVARIANTS_OR_LATER" id="construct-hub.SpdxLicense.property.GFDL_1_2_NO_INVARIANTS_OR_LATER"></a>

```typescript
public readonly GFDL_1_2_NO_INVARIANTS_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.2 or later - no invariants.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt)

---

##### `GFDL_1_2_ONLY`<sup>Required</sup> <a name="GFDL_1_2_ONLY" id="construct-hub.SpdxLicense.property.GFDL_1_2_ONLY"></a>

```typescript
public readonly GFDL_1_2_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.2 only.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt)

---

##### `GFDL_1_2_OR_LATER`<sup>Required</sup> <a name="GFDL_1_2_OR_LATER" id="construct-hub.SpdxLicense.property.GFDL_1_2_OR_LATER"></a>

```typescript
public readonly GFDL_1_2_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.2 or later.

> [https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt](https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt)

---

##### `GFDL_1_3`<sup>Required</sup> <a name="GFDL_1_3" id="construct-hub.SpdxLicense.property.GFDL_1_3"></a>

```typescript
public readonly GFDL_1_3: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.3.

> [https://www.gnu.org/licenses/fdl-1.3.txt](https://www.gnu.org/licenses/fdl-1.3.txt)

---

##### `GFDL_1_3_INVARIANTS_ONLY`<sup>Required</sup> <a name="GFDL_1_3_INVARIANTS_ONLY" id="construct-hub.SpdxLicense.property.GFDL_1_3_INVARIANTS_ONLY"></a>

```typescript
public readonly GFDL_1_3_INVARIANTS_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.3 only - invariants.

> [https://www.gnu.org/licenses/fdl-1.3.txt](https://www.gnu.org/licenses/fdl-1.3.txt)

---

##### `GFDL_1_3_INVARIANTS_OR_LATER`<sup>Required</sup> <a name="GFDL_1_3_INVARIANTS_OR_LATER" id="construct-hub.SpdxLicense.property.GFDL_1_3_INVARIANTS_OR_LATER"></a>

```typescript
public readonly GFDL_1_3_INVARIANTS_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.3 or later - invariants.

> [https://www.gnu.org/licenses/fdl-1.3.txt](https://www.gnu.org/licenses/fdl-1.3.txt)

---

##### `GFDL_1_3_NO_INVARIANTS_ONLY`<sup>Required</sup> <a name="GFDL_1_3_NO_INVARIANTS_ONLY" id="construct-hub.SpdxLicense.property.GFDL_1_3_NO_INVARIANTS_ONLY"></a>

```typescript
public readonly GFDL_1_3_NO_INVARIANTS_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.3 only - no invariants.

> [https://www.gnu.org/licenses/fdl-1.3.txt](https://www.gnu.org/licenses/fdl-1.3.txt)

---

##### `GFDL_1_3_NO_INVARIANTS_OR_LATER`<sup>Required</sup> <a name="GFDL_1_3_NO_INVARIANTS_OR_LATER" id="construct-hub.SpdxLicense.property.GFDL_1_3_NO_INVARIANTS_OR_LATER"></a>

```typescript
public readonly GFDL_1_3_NO_INVARIANTS_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.3 or later - no invariants.

> [https://www.gnu.org/licenses/fdl-1.3.txt](https://www.gnu.org/licenses/fdl-1.3.txt)

---

##### `GFDL_1_3_ONLY`<sup>Required</sup> <a name="GFDL_1_3_ONLY" id="construct-hub.SpdxLicense.property.GFDL_1_3_ONLY"></a>

```typescript
public readonly GFDL_1_3_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.3 only.

> [https://www.gnu.org/licenses/fdl-1.3.txt](https://www.gnu.org/licenses/fdl-1.3.txt)

---

##### `GFDL_1_3_OR_LATER`<sup>Required</sup> <a name="GFDL_1_3_OR_LATER" id="construct-hub.SpdxLicense.property.GFDL_1_3_OR_LATER"></a>

```typescript
public readonly GFDL_1_3_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Free Documentation License v1.3 or later.

> [https://www.gnu.org/licenses/fdl-1.3.txt](https://www.gnu.org/licenses/fdl-1.3.txt)

---

##### `GIFTWARE`<sup>Required</sup> <a name="GIFTWARE" id="construct-hub.SpdxLicense.property.GIFTWARE"></a>

```typescript
public readonly GIFTWARE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Giftware License.

> [http://liballeg.org/license.html#allegro-4-the-giftware-license](http://liballeg.org/license.html#allegro-4-the-giftware-license)

---

##### `GL2_P_S`<sup>Required</sup> <a name="GL2_P_S" id="construct-hub.SpdxLicense.property.GL2_P_S"></a>

```typescript
public readonly GL2_P_S: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GL2PS License.

> [http://www.geuz.org/gl2ps/COPYING.GL2PS](http://www.geuz.org/gl2ps/COPYING.GL2PS)

---

##### `GLIDE`<sup>Required</sup> <a name="GLIDE" id="construct-hub.SpdxLicense.property.GLIDE"></a>

```typescript
public readonly GLIDE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

3dfx Glide License.

> [http://www.users.on.net/~triforce/glidexp/COPYING.txt](http://www.users.on.net/~triforce/glidexp/COPYING.txt)

---

##### `GLULXE`<sup>Required</sup> <a name="GLULXE" id="construct-hub.SpdxLicense.property.GLULXE"></a>

```typescript
public readonly GLULXE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Glulxe License.

> [https://fedoraproject.org/wiki/Licensing/Glulxe](https://fedoraproject.org/wiki/Licensing/Glulxe)

---

##### `GLWTPL`<sup>Required</sup> <a name="GLWTPL" id="construct-hub.SpdxLicense.property.GLWTPL"></a>

```typescript
public readonly GLWTPL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Good Luck With That Public License.

> [https://github.com/me-shaon/GLWTPL/commit/da5f6bc734095efbacb442c0b31e33a65b9d6e85](https://github.com/me-shaon/GLWTPL/commit/da5f6bc734095efbacb442c0b31e33a65b9d6e85)

---

##### `GNUPLOT`<sup>Required</sup> <a name="GNUPLOT" id="construct-hub.SpdxLicense.property.GNUPLOT"></a>

```typescript
public readonly GNUPLOT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

gnuplot License.

> [https://fedoraproject.org/wiki/Licensing/Gnuplot](https://fedoraproject.org/wiki/Licensing/Gnuplot)

---

##### `GPL_1_0`<sup>Required</sup> <a name="GPL_1_0" id="construct-hub.SpdxLicense.property.GPL_1_0"></a>

```typescript
public readonly GPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v1.0 only.

> [https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html](https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html)

---

##### `GPL_1_0_ONLY`<sup>Required</sup> <a name="GPL_1_0_ONLY" id="construct-hub.SpdxLicense.property.GPL_1_0_ONLY"></a>

```typescript
public readonly GPL_1_0_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v1.0 only.

> [https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html](https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html)

---

##### `GPL_1_0_OR_LATER`<sup>Required</sup> <a name="GPL_1_0_OR_LATER" id="construct-hub.SpdxLicense.property.GPL_1_0_OR_LATER"></a>

```typescript
public readonly GPL_1_0_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v1.0 or later.

> [https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html](https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html)

---

##### `GPL_1_0_PLUS`<sup>Required</sup> <a name="GPL_1_0_PLUS" id="construct-hub.SpdxLicense.property.GPL_1_0_PLUS"></a>

```typescript
public readonly GPL_1_0_PLUS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v1.0 or later.

> [https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html](https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html)

---

##### `GPL_2_0`<sup>Required</sup> <a name="GPL_2_0" id="construct-hub.SpdxLicense.property.GPL_2_0"></a>

```typescript
public readonly GPL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v2.0 only.

> [https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html)

---

##### `GPL_2_0_ONLY`<sup>Required</sup> <a name="GPL_2_0_ONLY" id="construct-hub.SpdxLicense.property.GPL_2_0_ONLY"></a>

```typescript
public readonly GPL_2_0_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v2.0 only.

> [https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html)

---

##### `GPL_2_0_OR_LATER`<sup>Required</sup> <a name="GPL_2_0_OR_LATER" id="construct-hub.SpdxLicense.property.GPL_2_0_OR_LATER"></a>

```typescript
public readonly GPL_2_0_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v2.0 or later.

> [https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html)

---

##### `GPL_2_0_PLUS`<sup>Required</sup> <a name="GPL_2_0_PLUS" id="construct-hub.SpdxLicense.property.GPL_2_0_PLUS"></a>

```typescript
public readonly GPL_2_0_PLUS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v2.0 or later.

> [https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html)

---

##### `GPL_2_0_WITH_AUTOCONF_EXCEPTION`<sup>Required</sup> <a name="GPL_2_0_WITH_AUTOCONF_EXCEPTION" id="construct-hub.SpdxLicense.property.GPL_2_0_WITH_AUTOCONF_EXCEPTION"></a>

```typescript
public readonly GPL_2_0_WITH_AUTOCONF_EXCEPTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v2.0 w/Autoconf exception.

> [http://ac-archive.sourceforge.net/doc/copyright.html](http://ac-archive.sourceforge.net/doc/copyright.html)

---

##### `GPL_2_0_WITH_BISON_EXCEPTION`<sup>Required</sup> <a name="GPL_2_0_WITH_BISON_EXCEPTION" id="construct-hub.SpdxLicense.property.GPL_2_0_WITH_BISON_EXCEPTION"></a>

```typescript
public readonly GPL_2_0_WITH_BISON_EXCEPTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v2.0 w/Bison exception.

> [http://git.savannah.gnu.org/cgit/bison.git/tree/data/yacc.c?id=193d7c7054ba7197b0789e14965b739162319b5e#n141](http://git.savannah.gnu.org/cgit/bison.git/tree/data/yacc.c?id=193d7c7054ba7197b0789e14965b739162319b5e#n141)

---

##### `GPL_2_0_WITH_CLASSPATH_EXCEPTION`<sup>Required</sup> <a name="GPL_2_0_WITH_CLASSPATH_EXCEPTION" id="construct-hub.SpdxLicense.property.GPL_2_0_WITH_CLASSPATH_EXCEPTION"></a>

```typescript
public readonly GPL_2_0_WITH_CLASSPATH_EXCEPTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v2.0 w/Classpath exception.

> [https://www.gnu.org/software/classpath/license.html](https://www.gnu.org/software/classpath/license.html)

---

##### `GPL_2_0_WITH_FONT_EXCEPTION`<sup>Required</sup> <a name="GPL_2_0_WITH_FONT_EXCEPTION" id="construct-hub.SpdxLicense.property.GPL_2_0_WITH_FONT_EXCEPTION"></a>

```typescript
public readonly GPL_2_0_WITH_FONT_EXCEPTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v2.0 w/Font exception.

> [https://www.gnu.org/licenses/gpl-faq.html#FontException](https://www.gnu.org/licenses/gpl-faq.html#FontException)

---

##### `GPL_2_0_WITH_GCC_EXCEPTION`<sup>Required</sup> <a name="GPL_2_0_WITH_GCC_EXCEPTION" id="construct-hub.SpdxLicense.property.GPL_2_0_WITH_GCC_EXCEPTION"></a>

```typescript
public readonly GPL_2_0_WITH_GCC_EXCEPTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v2.0 w/GCC Runtime Library exception.

> [https://gcc.gnu.org/git/?p=gcc.git;a=blob;f=gcc/libgcc1.c;h=762f5143fc6eed57b6797c82710f3538aa52b40b;hb=cb143a3ce4fb417c68f5fa2691a1b1b1053dfba9#l10](https://gcc.gnu.org/git/?p=gcc.git;a=blob;f=gcc/libgcc1.c;h=762f5143fc6eed57b6797c82710f3538aa52b40b;hb=cb143a3ce4fb417c68f5fa2691a1b1b1053dfba9#l10)

---

##### `GPL_3_0`<sup>Required</sup> <a name="GPL_3_0" id="construct-hub.SpdxLicense.property.GPL_3_0"></a>

```typescript
public readonly GPL_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v3.0 only.

> [https://www.gnu.org/licenses/gpl-3.0-standalone.html](https://www.gnu.org/licenses/gpl-3.0-standalone.html)

---

##### `GPL_3_0_ONLY`<sup>Required</sup> <a name="GPL_3_0_ONLY" id="construct-hub.SpdxLicense.property.GPL_3_0_ONLY"></a>

```typescript
public readonly GPL_3_0_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v3.0 only.

> [https://www.gnu.org/licenses/gpl-3.0-standalone.html](https://www.gnu.org/licenses/gpl-3.0-standalone.html)

---

##### `GPL_3_0_OR_LATER`<sup>Required</sup> <a name="GPL_3_0_OR_LATER" id="construct-hub.SpdxLicense.property.GPL_3_0_OR_LATER"></a>

```typescript
public readonly GPL_3_0_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v3.0 or later.

> [https://www.gnu.org/licenses/gpl-3.0-standalone.html](https://www.gnu.org/licenses/gpl-3.0-standalone.html)

---

##### `GPL_3_0_PLUS`<sup>Required</sup> <a name="GPL_3_0_PLUS" id="construct-hub.SpdxLicense.property.GPL_3_0_PLUS"></a>

```typescript
public readonly GPL_3_0_PLUS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v3.0 or later.

> [https://www.gnu.org/licenses/gpl-3.0-standalone.html](https://www.gnu.org/licenses/gpl-3.0-standalone.html)

---

##### `GPL_3_0_WITH_AUTOCONF_EXCEPTION`<sup>Required</sup> <a name="GPL_3_0_WITH_AUTOCONF_EXCEPTION" id="construct-hub.SpdxLicense.property.GPL_3_0_WITH_AUTOCONF_EXCEPTION"></a>

```typescript
public readonly GPL_3_0_WITH_AUTOCONF_EXCEPTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v3.0 w/Autoconf exception.

> [https://www.gnu.org/licenses/autoconf-exception-3.0.html](https://www.gnu.org/licenses/autoconf-exception-3.0.html)

---

##### `GPL_3_0_WITH_GCC_EXCEPTION`<sup>Required</sup> <a name="GPL_3_0_WITH_GCC_EXCEPTION" id="construct-hub.SpdxLicense.property.GPL_3_0_WITH_GCC_EXCEPTION"></a>

```typescript
public readonly GPL_3_0_WITH_GCC_EXCEPTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU General Public License v3.0 w/GCC Runtime Library exception.

> [https://www.gnu.org/licenses/gcc-exception-3.1.html](https://www.gnu.org/licenses/gcc-exception-3.1.html)

---

##### `GSOAP_1_3B`<sup>Required</sup> <a name="GSOAP_1_3B" id="construct-hub.SpdxLicense.property.GSOAP_1_3B"></a>

```typescript
public readonly GSOAP_1_3B: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

gSOAP Public License v1.3b.

> [http://www.cs.fsu.edu/~engelen/license.html](http://www.cs.fsu.edu/~engelen/license.html)

---

##### `HASKELL_REPORT`<sup>Required</sup> <a name="HASKELL_REPORT" id="construct-hub.SpdxLicense.property.HASKELL_REPORT"></a>

```typescript
public readonly HASKELL_REPORT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Haskell Language Report License.

> [https://fedoraproject.org/wiki/Licensing/Haskell_Language_Report_License](https://fedoraproject.org/wiki/Licensing/Haskell_Language_Report_License)

---

##### `HIPPOCRATIC_2_1`<sup>Required</sup> <a name="HIPPOCRATIC_2_1" id="construct-hub.SpdxLicense.property.HIPPOCRATIC_2_1"></a>

```typescript
public readonly HIPPOCRATIC_2_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Hippocratic License 2.1.

> [https://firstdonoharm.dev/version/2/1/license.html](https://firstdonoharm.dev/version/2/1/license.html)

---

##### `HPND`<sup>Required</sup> <a name="HPND" id="construct-hub.SpdxLicense.property.HPND"></a>

```typescript
public readonly HPND: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Historical Permission Notice and Disclaimer.

> [https://opensource.org/licenses/HPND](https://opensource.org/licenses/HPND)

---

##### `HPND_SELL_VARIANT`<sup>Required</sup> <a name="HPND_SELL_VARIANT" id="construct-hub.SpdxLicense.property.HPND_SELL_VARIANT"></a>

```typescript
public readonly HPND_SELL_VARIANT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Historical Permission Notice and Disclaimer - sell variant.

> [https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/net/sunrpc/auth_gss/gss_generic_token.c?h=v4.19](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/net/sunrpc/auth_gss/gss_generic_token.c?h=v4.19)

---

##### `HTMLTIDY`<sup>Required</sup> <a name="HTMLTIDY" id="construct-hub.SpdxLicense.property.HTMLTIDY"></a>

```typescript
public readonly HTMLTIDY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

HTML Tidy License.

> [https://github.com/htacg/tidy-html5/blob/next/README/LICENSE.md](https://github.com/htacg/tidy-html5/blob/next/README/LICENSE.md)

---

##### `I_MATIX`<sup>Required</sup> <a name="I_MATIX" id="construct-hub.SpdxLicense.property.I_MATIX"></a>

```typescript
public readonly I_MATIX: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

iMatix Standard Function Library Agreement.

> [http://legacy.imatix.com/html/sfl/sfl4.htm#license](http://legacy.imatix.com/html/sfl/sfl4.htm#license)

---

##### `IBM_PIBS`<sup>Required</sup> <a name="IBM_PIBS" id="construct-hub.SpdxLicense.property.IBM_PIBS"></a>

```typescript
public readonly IBM_PIBS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

IBM PowerPC Initialization and Boot Software.

> [http://git.denx.de/?p=u-boot.git;a=blob;f=arch/powerpc/cpu/ppc4xx/miiphy.c;h=297155fdafa064b955e53e9832de93bfb0cfb85b;hb=9fab4bf4cc077c21e43941866f3f2c196f28670d](http://git.denx.de/?p=u-boot.git;a=blob;f=arch/powerpc/cpu/ppc4xx/miiphy.c;h=297155fdafa064b955e53e9832de93bfb0cfb85b;hb=9fab4bf4cc077c21e43941866f3f2c196f28670d)

---

##### `ICU`<sup>Required</sup> <a name="ICU" id="construct-hub.SpdxLicense.property.ICU"></a>

```typescript
public readonly ICU: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

ICU License.

> [http://source.icu-project.org/repos/icu/icu/trunk/license.html](http://source.icu-project.org/repos/icu/icu/trunk/license.html)

---

##### `IJG`<sup>Required</sup> <a name="IJG" id="construct-hub.SpdxLicense.property.IJG"></a>

```typescript
public readonly IJG: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Independent JPEG Group License.

> [http://dev.w3.org/cvsweb/Amaya/libjpeg/Attic/README?rev=1.2](http://dev.w3.org/cvsweb/Amaya/libjpeg/Attic/README?rev=1.2)

---

##### `IMAGE_MAGICK`<sup>Required</sup> <a name="IMAGE_MAGICK" id="construct-hub.SpdxLicense.property.IMAGE_MAGICK"></a>

```typescript
public readonly IMAGE_MAGICK: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

ImageMagick License.

> [http://www.imagemagick.org/script/license.php](http://www.imagemagick.org/script/license.php)

---

##### `IMLIB2`<sup>Required</sup> <a name="IMLIB2" id="construct-hub.SpdxLicense.property.IMLIB2"></a>

```typescript
public readonly IMLIB2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Imlib2 License.

> [http://trac.enlightenment.org/e/browser/trunk/imlib2/COPYING](http://trac.enlightenment.org/e/browser/trunk/imlib2/COPYING)

---

##### `INFO_ZIP`<sup>Required</sup> <a name="INFO_ZIP" id="construct-hub.SpdxLicense.property.INFO_ZIP"></a>

```typescript
public readonly INFO_ZIP: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Info-ZIP License.

> [http://www.info-zip.org/license.html](http://www.info-zip.org/license.html)

---

##### `INTEL`<sup>Required</sup> <a name="INTEL" id="construct-hub.SpdxLicense.property.INTEL"></a>

```typescript
public readonly INTEL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Intel Open Source License.

> [https://opensource.org/licenses/Intel](https://opensource.org/licenses/Intel)

---

##### `INTEL_ACPI`<sup>Required</sup> <a name="INTEL_ACPI" id="construct-hub.SpdxLicense.property.INTEL_ACPI"></a>

```typescript
public readonly INTEL_ACPI: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Intel ACPI Software License Agreement.

> [https://fedoraproject.org/wiki/Licensing/Intel_ACPI_Software_License_Agreement](https://fedoraproject.org/wiki/Licensing/Intel_ACPI_Software_License_Agreement)

---

##### `INTERBASE_1_0`<sup>Required</sup> <a name="INTERBASE_1_0" id="construct-hub.SpdxLicense.property.INTERBASE_1_0"></a>

```typescript
public readonly INTERBASE_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Interbase Public License v1.0.

> [https://web.archive.org/web/20060319014854/http://info.borland.com/devsupport/interbase/opensource/IPL.html](https://web.archive.org/web/20060319014854/http://info.borland.com/devsupport/interbase/opensource/IPL.html)

---

##### `IPA`<sup>Required</sup> <a name="IPA" id="construct-hub.SpdxLicense.property.IPA"></a>

```typescript
public readonly IPA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

IPA Font License.

> [https://opensource.org/licenses/IPA](https://opensource.org/licenses/IPA)

---

##### `IPL_1_0`<sup>Required</sup> <a name="IPL_1_0" id="construct-hub.SpdxLicense.property.IPL_1_0"></a>

```typescript
public readonly IPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

IBM Public License v1.0.

> [https://opensource.org/licenses/IPL-1.0](https://opensource.org/licenses/IPL-1.0)

---

##### `ISC`<sup>Required</sup> <a name="ISC" id="construct-hub.SpdxLicense.property.ISC"></a>

```typescript
public readonly ISC: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

ISC License.

> [https://www.isc.org/downloads/software-support-policy/isc-license/](https://www.isc.org/downloads/software-support-policy/isc-license/)

---

##### `JASPER_2_0`<sup>Required</sup> <a name="JASPER_2_0" id="construct-hub.SpdxLicense.property.JASPER_2_0"></a>

```typescript
public readonly JASPER_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

JasPer License.

> [http://www.ece.uvic.ca/~mdadams/jasper/LICENSE](http://www.ece.uvic.ca/~mdadams/jasper/LICENSE)

---

##### `JPNIC`<sup>Required</sup> <a name="JPNIC" id="construct-hub.SpdxLicense.property.JPNIC"></a>

```typescript
public readonly JPNIC: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Japan Network Information Center License.

> [https://gitlab.isc.org/isc-projects/bind9/blob/master/COPYRIGHT#L366](https://gitlab.isc.org/isc-projects/bind9/blob/master/COPYRIGHT#L366)

---

##### `JSON`<sup>Required</sup> <a name="JSON" id="construct-hub.SpdxLicense.property.JSON"></a>

```typescript
public readonly JSON: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

JSON License.

> [http://www.json.org/license.html](http://www.json.org/license.html)

---

##### `LAL_1_2`<sup>Required</sup> <a name="LAL_1_2" id="construct-hub.SpdxLicense.property.LAL_1_2"></a>

```typescript
public readonly LAL_1_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Licence Art Libre 1.2.

> [http://artlibre.org/licence/lal/licence-art-libre-12/](http://artlibre.org/licence/lal/licence-art-libre-12/)

---

##### `LAL_1_3`<sup>Required</sup> <a name="LAL_1_3" id="construct-hub.SpdxLicense.property.LAL_1_3"></a>

```typescript
public readonly LAL_1_3: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Licence Art Libre 1.3.

> [https://artlibre.org/](https://artlibre.org/)

---

##### `LATEX2_E`<sup>Required</sup> <a name="LATEX2_E" id="construct-hub.SpdxLicense.property.LATEX2_E"></a>

```typescript
public readonly LATEX2_E: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Latex2e License.

> [https://fedoraproject.org/wiki/Licensing/Latex2e](https://fedoraproject.org/wiki/Licensing/Latex2e)

---

##### `LEPTONICA`<sup>Required</sup> <a name="LEPTONICA" id="construct-hub.SpdxLicense.property.LEPTONICA"></a>

```typescript
public readonly LEPTONICA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Leptonica License.

> [https://fedoraproject.org/wiki/Licensing/Leptonica](https://fedoraproject.org/wiki/Licensing/Leptonica)

---

##### `LGPL_2_0`<sup>Required</sup> <a name="LGPL_2_0" id="construct-hub.SpdxLicense.property.LGPL_2_0"></a>

```typescript
public readonly LGPL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Library General Public License v2 only.

> [https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html)

---

##### `LGPL_2_0_ONLY`<sup>Required</sup> <a name="LGPL_2_0_ONLY" id="construct-hub.SpdxLicense.property.LGPL_2_0_ONLY"></a>

```typescript
public readonly LGPL_2_0_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Library General Public License v2 only.

> [https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html)

---

##### `LGPL_2_0_OR_LATER`<sup>Required</sup> <a name="LGPL_2_0_OR_LATER" id="construct-hub.SpdxLicense.property.LGPL_2_0_OR_LATER"></a>

```typescript
public readonly LGPL_2_0_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Library General Public License v2 or later.

> [https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html)

---

##### `LGPL_2_0_PLUS`<sup>Required</sup> <a name="LGPL_2_0_PLUS" id="construct-hub.SpdxLicense.property.LGPL_2_0_PLUS"></a>

```typescript
public readonly LGPL_2_0_PLUS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Library General Public License v2 or later.

> [https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html)

---

##### `LGPL_2_1`<sup>Required</sup> <a name="LGPL_2_1" id="construct-hub.SpdxLicense.property.LGPL_2_1"></a>

```typescript
public readonly LGPL_2_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Lesser General Public License v2.1 only.

> [https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html)

---

##### `LGPL_2_1_ONLY`<sup>Required</sup> <a name="LGPL_2_1_ONLY" id="construct-hub.SpdxLicense.property.LGPL_2_1_ONLY"></a>

```typescript
public readonly LGPL_2_1_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Lesser General Public License v2.1 only.

> [https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html)

---

##### `LGPL_2_1_OR_LATER`<sup>Required</sup> <a name="LGPL_2_1_OR_LATER" id="construct-hub.SpdxLicense.property.LGPL_2_1_OR_LATER"></a>

```typescript
public readonly LGPL_2_1_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Lesser General Public License v2.1 or later.

> [https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html)

---

##### `LGPL_2_1_PLUS`<sup>Required</sup> <a name="LGPL_2_1_PLUS" id="construct-hub.SpdxLicense.property.LGPL_2_1_PLUS"></a>

```typescript
public readonly LGPL_2_1_PLUS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Library General Public License v2.1 or later.

> [https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html)

---

##### `LGPL_3_0`<sup>Required</sup> <a name="LGPL_3_0" id="construct-hub.SpdxLicense.property.LGPL_3_0"></a>

```typescript
public readonly LGPL_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Lesser General Public License v3.0 only.

> [https://www.gnu.org/licenses/lgpl-3.0-standalone.html](https://www.gnu.org/licenses/lgpl-3.0-standalone.html)

---

##### `LGPL_3_0_ONLY`<sup>Required</sup> <a name="LGPL_3_0_ONLY" id="construct-hub.SpdxLicense.property.LGPL_3_0_ONLY"></a>

```typescript
public readonly LGPL_3_0_ONLY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Lesser General Public License v3.0 only.

> [https://www.gnu.org/licenses/lgpl-3.0-standalone.html](https://www.gnu.org/licenses/lgpl-3.0-standalone.html)

---

##### `LGPL_3_0_OR_LATER`<sup>Required</sup> <a name="LGPL_3_0_OR_LATER" id="construct-hub.SpdxLicense.property.LGPL_3_0_OR_LATER"></a>

```typescript
public readonly LGPL_3_0_OR_LATER: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Lesser General Public License v3.0 or later.

> [https://www.gnu.org/licenses/lgpl-3.0-standalone.html](https://www.gnu.org/licenses/lgpl-3.0-standalone.html)

---

##### `LGPL_3_0_PLUS`<sup>Required</sup> <a name="LGPL_3_0_PLUS" id="construct-hub.SpdxLicense.property.LGPL_3_0_PLUS"></a>

```typescript
public readonly LGPL_3_0_PLUS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

GNU Lesser General Public License v3.0 or later.

> [https://www.gnu.org/licenses/lgpl-3.0-standalone.html](https://www.gnu.org/licenses/lgpl-3.0-standalone.html)

---

##### `LGPLLR`<sup>Required</sup> <a name="LGPLLR" id="construct-hub.SpdxLicense.property.LGPLLR"></a>

```typescript
public readonly LGPLLR: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Lesser General Public License For Linguistic Resources.

> [http://www-igm.univ-mlv.fr/~unitex/lgpllr.html](http://www-igm.univ-mlv.fr/~unitex/lgpllr.html)

---

##### `LIBPNG`<sup>Required</sup> <a name="LIBPNG" id="construct-hub.SpdxLicense.property.LIBPNG"></a>

```typescript
public readonly LIBPNG: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

libpng License.

> [http://www.libpng.org/pub/png/src/libpng-LICENSE.txt](http://www.libpng.org/pub/png/src/libpng-LICENSE.txt)

---

##### `LIBPNG_2_0`<sup>Required</sup> <a name="LIBPNG_2_0" id="construct-hub.SpdxLicense.property.LIBPNG_2_0"></a>

```typescript
public readonly LIBPNG_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

PNG Reference Library version 2.

> [http://www.libpng.org/pub/png/src/libpng-LICENSE.txt](http://www.libpng.org/pub/png/src/libpng-LICENSE.txt)

---

##### `LIBSELINUX_1_0`<sup>Required</sup> <a name="LIBSELINUX_1_0" id="construct-hub.SpdxLicense.property.LIBSELINUX_1_0"></a>

```typescript
public readonly LIBSELINUX_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

libselinux public domain notice.

> [https://github.com/SELinuxProject/selinux/blob/master/libselinux/LICENSE](https://github.com/SELinuxProject/selinux/blob/master/libselinux/LICENSE)

---

##### `LIBTIFF`<sup>Required</sup> <a name="LIBTIFF" id="construct-hub.SpdxLicense.property.LIBTIFF"></a>

```typescript
public readonly LIBTIFF: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

libtiff License.

> [https://fedoraproject.org/wiki/Licensing/libtiff](https://fedoraproject.org/wiki/Licensing/libtiff)

---

##### `LILIQ_P_1_1`<sup>Required</sup> <a name="LILIQ_P_1_1" id="construct-hub.SpdxLicense.property.LILIQ_P_1_1"></a>

```typescript
public readonly LILIQ_P_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Licence Libre du Québec – Permissive version 1.1.

> [https://forge.gouv.qc.ca/licence/fr/liliq-v1-1/](https://forge.gouv.qc.ca/licence/fr/liliq-v1-1/)

---

##### `LILIQ_R_1_1`<sup>Required</sup> <a name="LILIQ_R_1_1" id="construct-hub.SpdxLicense.property.LILIQ_R_1_1"></a>

```typescript
public readonly LILIQ_R_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Licence Libre du Québec – Réciprocité version 1.1.

> [https://www.forge.gouv.qc.ca/participez/licence-logicielle/licence-libre-du-quebec-liliq-en-francais/licence-libre-du-quebec-reciprocite-liliq-r-v1-1/](https://www.forge.gouv.qc.ca/participez/licence-logicielle/licence-libre-du-quebec-liliq-en-francais/licence-libre-du-quebec-reciprocite-liliq-r-v1-1/)

---

##### `LILIQ_RPLUS_1_1`<sup>Required</sup> <a name="LILIQ_RPLUS_1_1" id="construct-hub.SpdxLicense.property.LILIQ_RPLUS_1_1"></a>

```typescript
public readonly LILIQ_RPLUS_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Licence Libre du Québec – Réciprocité forte version 1.1.

> [https://www.forge.gouv.qc.ca/participez/licence-logicielle/licence-libre-du-quebec-liliq-en-francais/licence-libre-du-quebec-reciprocite-forte-liliq-r-v1-1/](https://www.forge.gouv.qc.ca/participez/licence-logicielle/licence-libre-du-quebec-liliq-en-francais/licence-libre-du-quebec-reciprocite-forte-liliq-r-v1-1/)

---

##### `LINUX_OPENIB`<sup>Required</sup> <a name="LINUX_OPENIB" id="construct-hub.SpdxLicense.property.LINUX_OPENIB"></a>

```typescript
public readonly LINUX_OPENIB: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Linux Kernel Variant of OpenIB.org license.

> [https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/infiniband/core/sa.h](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/infiniband/core/sa.h)

---

##### `LPL_1_0`<sup>Required</sup> <a name="LPL_1_0" id="construct-hub.SpdxLicense.property.LPL_1_0"></a>

```typescript
public readonly LPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Lucent Public License Version 1.0.

> [https://opensource.org/licenses/LPL-1.0](https://opensource.org/licenses/LPL-1.0)

---

##### `LPL_1_02`<sup>Required</sup> <a name="LPL_1_02" id="construct-hub.SpdxLicense.property.LPL_1_02"></a>

```typescript
public readonly LPL_1_02: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Lucent Public License v1.02.

> [http://plan9.bell-labs.com/plan9/license.html](http://plan9.bell-labs.com/plan9/license.html)

---

##### `LPPL_1_0`<sup>Required</sup> <a name="LPPL_1_0" id="construct-hub.SpdxLicense.property.LPPL_1_0"></a>

```typescript
public readonly LPPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

LaTeX Project Public License v1.0.

> [http://www.latex-project.org/lppl/lppl-1-0.txt](http://www.latex-project.org/lppl/lppl-1-0.txt)

---

##### `LPPL_1_1`<sup>Required</sup> <a name="LPPL_1_1" id="construct-hub.SpdxLicense.property.LPPL_1_1"></a>

```typescript
public readonly LPPL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

LaTeX Project Public License v1.1.

> [http://www.latex-project.org/lppl/lppl-1-1.txt](http://www.latex-project.org/lppl/lppl-1-1.txt)

---

##### `LPPL_1_2`<sup>Required</sup> <a name="LPPL_1_2" id="construct-hub.SpdxLicense.property.LPPL_1_2"></a>

```typescript
public readonly LPPL_1_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

LaTeX Project Public License v1.2.

> [http://www.latex-project.org/lppl/lppl-1-2.txt](http://www.latex-project.org/lppl/lppl-1-2.txt)

---

##### `LPPL_1_3A`<sup>Required</sup> <a name="LPPL_1_3A" id="construct-hub.SpdxLicense.property.LPPL_1_3A"></a>

```typescript
public readonly LPPL_1_3A: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

LaTeX Project Public License v1.3a.

> [http://www.latex-project.org/lppl/lppl-1-3a.txt](http://www.latex-project.org/lppl/lppl-1-3a.txt)

---

##### `LPPL_1_3C`<sup>Required</sup> <a name="LPPL_1_3C" id="construct-hub.SpdxLicense.property.LPPL_1_3C"></a>

```typescript
public readonly LPPL_1_3C: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

LaTeX Project Public License v1.3c.

> [http://www.latex-project.org/lppl/lppl-1-3c.txt](http://www.latex-project.org/lppl/lppl-1-3c.txt)

---

##### `MAKE_INDEX`<sup>Required</sup> <a name="MAKE_INDEX" id="construct-hub.SpdxLicense.property.MAKE_INDEX"></a>

```typescript
public readonly MAKE_INDEX: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

MakeIndex License.

> [https://fedoraproject.org/wiki/Licensing/MakeIndex](https://fedoraproject.org/wiki/Licensing/MakeIndex)

---

##### `MIR_O_S`<sup>Required</sup> <a name="MIR_O_S" id="construct-hub.SpdxLicense.property.MIR_O_S"></a>

```typescript
public readonly MIR_O_S: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

The MirOS Licence.

> [https://opensource.org/licenses/MirOS](https://opensource.org/licenses/MirOS)

---

##### `MIT`<sup>Required</sup> <a name="MIT" id="construct-hub.SpdxLicense.property.MIT"></a>

```typescript
public readonly MIT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

MIT License.

> [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

---

##### `MIT_0`<sup>Required</sup> <a name="MIT_0" id="construct-hub.SpdxLicense.property.MIT_0"></a>

```typescript
public readonly MIT_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

MIT No Attribution.

> [https://github.com/aws/mit-0](https://github.com/aws/mit-0)

---

##### `MIT_ADVERTISING`<sup>Required</sup> <a name="MIT_ADVERTISING" id="construct-hub.SpdxLicense.property.MIT_ADVERTISING"></a>

```typescript
public readonly MIT_ADVERTISING: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Enlightenment License (e16).

> [https://fedoraproject.org/wiki/Licensing/MIT_With_Advertising](https://fedoraproject.org/wiki/Licensing/MIT_With_Advertising)

---

##### `MIT_CMU`<sup>Required</sup> <a name="MIT_CMU" id="construct-hub.SpdxLicense.property.MIT_CMU"></a>

```typescript
public readonly MIT_CMU: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

CMU License.

> [https://fedoraproject.org/wiki/Licensing:MIT?rd=Licensing/MIT#CMU_Style](https://fedoraproject.org/wiki/Licensing:MIT?rd=Licensing/MIT#CMU_Style)

---

##### `MIT_ENNA`<sup>Required</sup> <a name="MIT_ENNA" id="construct-hub.SpdxLicense.property.MIT_ENNA"></a>

```typescript
public readonly MIT_ENNA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

enna License.

> [https://fedoraproject.org/wiki/Licensing/MIT#enna](https://fedoraproject.org/wiki/Licensing/MIT#enna)

---

##### `MIT_FEH`<sup>Required</sup> <a name="MIT_FEH" id="construct-hub.SpdxLicense.property.MIT_FEH"></a>

```typescript
public readonly MIT_FEH: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

feh License.

> [https://fedoraproject.org/wiki/Licensing/MIT#feh](https://fedoraproject.org/wiki/Licensing/MIT#feh)

---

##### `MIT_OPEN_GROUP`<sup>Required</sup> <a name="MIT_OPEN_GROUP" id="construct-hub.SpdxLicense.property.MIT_OPEN_GROUP"></a>

```typescript
public readonly MIT_OPEN_GROUP: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

MIT Open Group variant.

> [https://gitlab.freedesktop.org/xorg/app/iceauth/-/blob/master/COPYING](https://gitlab.freedesktop.org/xorg/app/iceauth/-/blob/master/COPYING)

---

##### `MITNFA`<sup>Required</sup> <a name="MITNFA" id="construct-hub.SpdxLicense.property.MITNFA"></a>

```typescript
public readonly MITNFA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

MIT +no-false-attribs license.

> [https://fedoraproject.org/wiki/Licensing/MITNFA](https://fedoraproject.org/wiki/Licensing/MITNFA)

---

##### `MOTOSOTO`<sup>Required</sup> <a name="MOTOSOTO" id="construct-hub.SpdxLicense.property.MOTOSOTO"></a>

```typescript
public readonly MOTOSOTO: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Motosoto License.

> [https://opensource.org/licenses/Motosoto](https://opensource.org/licenses/Motosoto)

---

##### `MPICH2`<sup>Required</sup> <a name="MPICH2" id="construct-hub.SpdxLicense.property.MPICH2"></a>

```typescript
public readonly MPICH2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

mpich2 License.

> [https://fedoraproject.org/wiki/Licensing/MIT](https://fedoraproject.org/wiki/Licensing/MIT)

---

##### `MPL_1_0`<sup>Required</sup> <a name="MPL_1_0" id="construct-hub.SpdxLicense.property.MPL_1_0"></a>

```typescript
public readonly MPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Mozilla Public License 1.0.

> [http://www.mozilla.org/MPL/MPL-1.0.html](http://www.mozilla.org/MPL/MPL-1.0.html)

---

##### `MPL_1_1`<sup>Required</sup> <a name="MPL_1_1" id="construct-hub.SpdxLicense.property.MPL_1_1"></a>

```typescript
public readonly MPL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Mozilla Public License 1.1.

> [http://www.mozilla.org/MPL/MPL-1.1.html](http://www.mozilla.org/MPL/MPL-1.1.html)

---

##### `MPL_2_0`<sup>Required</sup> <a name="MPL_2_0" id="construct-hub.SpdxLicense.property.MPL_2_0"></a>

```typescript
public readonly MPL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Mozilla Public License 2.0.

> [http://www.mozilla.org/MPL/2.0/](http://www.mozilla.org/MPL/2.0/)

---

##### `MPL_2_0_NO_COPYLEFT_EXCEPTION`<sup>Required</sup> <a name="MPL_2_0_NO_COPYLEFT_EXCEPTION" id="construct-hub.SpdxLicense.property.MPL_2_0_NO_COPYLEFT_EXCEPTION"></a>

```typescript
public readonly MPL_2_0_NO_COPYLEFT_EXCEPTION: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Mozilla Public License 2.0 (no copyleft exception).

> [http://www.mozilla.org/MPL/2.0/](http://www.mozilla.org/MPL/2.0/)

---

##### `MS_PL`<sup>Required</sup> <a name="MS_PL" id="construct-hub.SpdxLicense.property.MS_PL"></a>

```typescript
public readonly MS_PL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Microsoft Public License.

> [http://www.microsoft.com/opensource/licenses.mspx](http://www.microsoft.com/opensource/licenses.mspx)

---

##### `MS_RL`<sup>Required</sup> <a name="MS_RL" id="construct-hub.SpdxLicense.property.MS_RL"></a>

```typescript
public readonly MS_RL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Microsoft Reciprocal License.

> [http://www.microsoft.com/opensource/licenses.mspx](http://www.microsoft.com/opensource/licenses.mspx)

---

##### `MTLL`<sup>Required</sup> <a name="MTLL" id="construct-hub.SpdxLicense.property.MTLL"></a>

```typescript
public readonly MTLL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Matrix Template Library License.

> [https://fedoraproject.org/wiki/Licensing/Matrix_Template_Library_License](https://fedoraproject.org/wiki/Licensing/Matrix_Template_Library_License)

---

##### `MULANPSL_1_0`<sup>Required</sup> <a name="MULANPSL_1_0" id="construct-hub.SpdxLicense.property.MULANPSL_1_0"></a>

```typescript
public readonly MULANPSL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Mulan Permissive Software License, Version 1.

> [https://license.coscl.org.cn/MulanPSL/](https://license.coscl.org.cn/MulanPSL/)

---

##### `MULANPSL_2_0`<sup>Required</sup> <a name="MULANPSL_2_0" id="construct-hub.SpdxLicense.property.MULANPSL_2_0"></a>

```typescript
public readonly MULANPSL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Mulan Permissive Software License, Version 2.

> [https://license.coscl.org.cn/MulanPSL2/](https://license.coscl.org.cn/MulanPSL2/)

---

##### `MULTICS`<sup>Required</sup> <a name="MULTICS" id="construct-hub.SpdxLicense.property.MULTICS"></a>

```typescript
public readonly MULTICS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Multics License.

> [https://opensource.org/licenses/Multics](https://opensource.org/licenses/Multics)

---

##### `MUP`<sup>Required</sup> <a name="MUP" id="construct-hub.SpdxLicense.property.MUP"></a>

```typescript
public readonly MUP: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Mup License.

> [https://fedoraproject.org/wiki/Licensing/Mup](https://fedoraproject.org/wiki/Licensing/Mup)

---

##### `NASA_1_3`<sup>Required</sup> <a name="NASA_1_3" id="construct-hub.SpdxLicense.property.NASA_1_3"></a>

```typescript
public readonly NASA_1_3: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

NASA Open Source Agreement 1.3.

> [http://ti.arc.nasa.gov/opensource/nosa/](http://ti.arc.nasa.gov/opensource/nosa/)

---

##### `NAUMEN`<sup>Required</sup> <a name="NAUMEN" id="construct-hub.SpdxLicense.property.NAUMEN"></a>

```typescript
public readonly NAUMEN: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Naumen Public License.

> [https://opensource.org/licenses/Naumen](https://opensource.org/licenses/Naumen)

---

##### `NBPL_1_0`<sup>Required</sup> <a name="NBPL_1_0" id="construct-hub.SpdxLicense.property.NBPL_1_0"></a>

```typescript
public readonly NBPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Net Boolean Public License v1.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=37b4b3f6cc4bf34e1d3dec61e69914b9819d8894](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=37b4b3f6cc4bf34e1d3dec61e69914b9819d8894)

---

##### `NCGL_UK_2_0`<sup>Required</sup> <a name="NCGL_UK_2_0" id="construct-hub.SpdxLicense.property.NCGL_UK_2_0"></a>

```typescript
public readonly NCGL_UK_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Non-Commercial Government Licence.

> [https://github.com/spdx/license-list-XML/blob/master/src/Apache-2.0.xml](https://github.com/spdx/license-list-XML/blob/master/src/Apache-2.0.xml)

---

##### `NCSA`<sup>Required</sup> <a name="NCSA" id="construct-hub.SpdxLicense.property.NCSA"></a>

```typescript
public readonly NCSA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

University of Illinois/NCSA Open Source License.

> [http://otm.illinois.edu/uiuc_openSource](http://otm.illinois.edu/uiuc_openSource)

---

##### `NET_CD_F`<sup>Required</sup> <a name="NET_CD_F" id="construct-hub.SpdxLicense.property.NET_CD_F"></a>

```typescript
public readonly NET_CD_F: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

NetCDF license.

> [http://www.unidata.ucar.edu/software/netcdf/copyright.html](http://www.unidata.ucar.edu/software/netcdf/copyright.html)

---

##### `NET_SNMP`<sup>Required</sup> <a name="NET_SNMP" id="construct-hub.SpdxLicense.property.NET_SNMP"></a>

```typescript
public readonly NET_SNMP: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Net-SNMP License.

> [http://net-snmp.sourceforge.net/about/license.html](http://net-snmp.sourceforge.net/about/license.html)

---

##### `NEWSLETR`<sup>Required</sup> <a name="NEWSLETR" id="construct-hub.SpdxLicense.property.NEWSLETR"></a>

```typescript
public readonly NEWSLETR: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Newsletr License.

> [https://fedoraproject.org/wiki/Licensing/Newsletr](https://fedoraproject.org/wiki/Licensing/Newsletr)

---

##### `NGPL`<sup>Required</sup> <a name="NGPL" id="construct-hub.SpdxLicense.property.NGPL"></a>

```typescript
public readonly NGPL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Nethack General Public License.

> [https://opensource.org/licenses/NGPL](https://opensource.org/licenses/NGPL)

---

##### `NIST_PD`<sup>Required</sup> <a name="NIST_PD" id="construct-hub.SpdxLicense.property.NIST_PD"></a>

```typescript
public readonly NIST_PD: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

NIST Public Domain Notice.

> [https://github.com/tcheneau/simpleRPL/blob/e645e69e38dd4e3ccfeceb2db8cba05b7c2e0cd3/LICENSE.txt](https://github.com/tcheneau/simpleRPL/blob/e645e69e38dd4e3ccfeceb2db8cba05b7c2e0cd3/LICENSE.txt)

---

##### `NIST_PD_FALLBACK`<sup>Required</sup> <a name="NIST_PD_FALLBACK" id="construct-hub.SpdxLicense.property.NIST_PD_FALLBACK"></a>

```typescript
public readonly NIST_PD_FALLBACK: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

NIST Public Domain Notice with license fallback.

> [https://github.com/usnistgov/jsip/blob/59700e6926cbe96c5cdae897d9a7d2656b42abe3/LICENSE](https://github.com/usnistgov/jsip/blob/59700e6926cbe96c5cdae897d9a7d2656b42abe3/LICENSE)

---

##### `NLOD_1_0`<sup>Required</sup> <a name="NLOD_1_0" id="construct-hub.SpdxLicense.property.NLOD_1_0"></a>

```typescript
public readonly NLOD_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Norwegian Licence for Open Government Data.

> [http://data.norge.no/nlod/en/1.0](http://data.norge.no/nlod/en/1.0)

---

##### `NLPL`<sup>Required</sup> <a name="NLPL" id="construct-hub.SpdxLicense.property.NLPL"></a>

```typescript
public readonly NLPL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

No Limit Public License.

> [https://fedoraproject.org/wiki/Licensing/NLPL](https://fedoraproject.org/wiki/Licensing/NLPL)

---

##### `NOKIA`<sup>Required</sup> <a name="NOKIA" id="construct-hub.SpdxLicense.property.NOKIA"></a>

```typescript
public readonly NOKIA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Nokia Open Source License.

> [https://opensource.org/licenses/nokia](https://opensource.org/licenses/nokia)

---

##### `NOSL`<sup>Required</sup> <a name="NOSL" id="construct-hub.SpdxLicense.property.NOSL"></a>

```typescript
public readonly NOSL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Netizen Open Source License.

> [http://bits.netizen.com.au/licenses/NOSL/nosl.txt](http://bits.netizen.com.au/licenses/NOSL/nosl.txt)

---

##### `NOWEB`<sup>Required</sup> <a name="NOWEB" id="construct-hub.SpdxLicense.property.NOWEB"></a>

```typescript
public readonly NOWEB: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Noweb License.

> [https://fedoraproject.org/wiki/Licensing/Noweb](https://fedoraproject.org/wiki/Licensing/Noweb)

---

##### `NPL_1_0`<sup>Required</sup> <a name="NPL_1_0" id="construct-hub.SpdxLicense.property.NPL_1_0"></a>

```typescript
public readonly NPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Netscape Public License v1.0.

> [http://www.mozilla.org/MPL/NPL/1.0/](http://www.mozilla.org/MPL/NPL/1.0/)

---

##### `NPL_1_1`<sup>Required</sup> <a name="NPL_1_1" id="construct-hub.SpdxLicense.property.NPL_1_1"></a>

```typescript
public readonly NPL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Netscape Public License v1.1.

> [http://www.mozilla.org/MPL/NPL/1.1/](http://www.mozilla.org/MPL/NPL/1.1/)

---

##### `NPOSL_3_0`<sup>Required</sup> <a name="NPOSL_3_0" id="construct-hub.SpdxLicense.property.NPOSL_3_0"></a>

```typescript
public readonly NPOSL_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Non-Profit Open Software License 3.0.

> [https://opensource.org/licenses/NOSL3.0](https://opensource.org/licenses/NOSL3.0)

---

##### `NRL`<sup>Required</sup> <a name="NRL" id="construct-hub.SpdxLicense.property.NRL"></a>

```typescript
public readonly NRL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

NRL License.

> [http://web.mit.edu/network/isakmp/nrllicense.html](http://web.mit.edu/network/isakmp/nrllicense.html)

---

##### `NTP`<sup>Required</sup> <a name="NTP" id="construct-hub.SpdxLicense.property.NTP"></a>

```typescript
public readonly NTP: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

NTP License.

> [https://opensource.org/licenses/NTP](https://opensource.org/licenses/NTP)

---

##### `NTP_0`<sup>Required</sup> <a name="NTP_0" id="construct-hub.SpdxLicense.property.NTP_0"></a>

```typescript
public readonly NTP_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

NTP No Attribution.

> [https://github.com/tytso/e2fsprogs/blob/master/lib/et/et_name.c](https://github.com/tytso/e2fsprogs/blob/master/lib/et/et_name.c)

---

##### `NUNIT`<sup>Required</sup> <a name="NUNIT" id="construct-hub.SpdxLicense.property.NUNIT"></a>

```typescript
public readonly NUNIT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Nunit License.

> [https://fedoraproject.org/wiki/Licensing/Nunit](https://fedoraproject.org/wiki/Licensing/Nunit)

---

##### `O_UDA_1_0`<sup>Required</sup> <a name="O_UDA_1_0" id="construct-hub.SpdxLicense.property.O_UDA_1_0"></a>

```typescript
public readonly O_UDA_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Use of Data Agreement v1.0.

> [https://github.com/microsoft/Open-Use-of-Data-Agreement/blob/v1.0/O-UDA-1.0.md](https://github.com/microsoft/Open-Use-of-Data-Agreement/blob/v1.0/O-UDA-1.0.md)

---

##### `OCCT_PL`<sup>Required</sup> <a name="OCCT_PL" id="construct-hub.SpdxLicense.property.OCCT_PL"></a>

```typescript
public readonly OCCT_PL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open CASCADE Technology Public License.

> [http://www.opencascade.com/content/occt-public-license](http://www.opencascade.com/content/occt-public-license)

---

##### `OCLC_2_0`<sup>Required</sup> <a name="OCLC_2_0" id="construct-hub.SpdxLicense.property.OCLC_2_0"></a>

```typescript
public readonly OCLC_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

OCLC Research Public License 2.0.

> [http://www.oclc.org/research/activities/software/license/v2final.htm](http://www.oclc.org/research/activities/software/license/v2final.htm)

---

##### `ODBL_1_0`<sup>Required</sup> <a name="ODBL_1_0" id="construct-hub.SpdxLicense.property.ODBL_1_0"></a>

```typescript
public readonly ODBL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

ODC Open Database License v1.0.

> [http://www.opendatacommons.org/licenses/odbl/1.0/](http://www.opendatacommons.org/licenses/odbl/1.0/)

---

##### `ODC_BY_1_0`<sup>Required</sup> <a name="ODC_BY_1_0" id="construct-hub.SpdxLicense.property.ODC_BY_1_0"></a>

```typescript
public readonly ODC_BY_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Data Commons Attribution License v1.0.

> [https://opendatacommons.org/licenses/by/1.0/](https://opendatacommons.org/licenses/by/1.0/)

---

##### `OFL_1_0`<sup>Required</sup> <a name="OFL_1_0" id="construct-hub.SpdxLicense.property.OFL_1_0"></a>

```typescript
public readonly OFL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SIL Open Font License 1.0.

> [http://scripts.sil.org/cms/scripts/page.php?item_id=OFL10_web](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL10_web)

---

##### `OFL_1_0_NO_RFN`<sup>Required</sup> <a name="OFL_1_0_NO_RFN" id="construct-hub.SpdxLicense.property.OFL_1_0_NO_RFN"></a>

```typescript
public readonly OFL_1_0_NO_RFN: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SIL Open Font License 1.0 with no Reserved Font Name.

> [http://scripts.sil.org/cms/scripts/page.php?item_id=OFL10_web](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL10_web)

---

##### `OFL_1_0_RFN`<sup>Required</sup> <a name="OFL_1_0_RFN" id="construct-hub.SpdxLicense.property.OFL_1_0_RFN"></a>

```typescript
public readonly OFL_1_0_RFN: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SIL Open Font License 1.0 with Reserved Font Name.

> [http://scripts.sil.org/cms/scripts/page.php?item_id=OFL10_web](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL10_web)

---

##### `OFL_1_1`<sup>Required</sup> <a name="OFL_1_1" id="construct-hub.SpdxLicense.property.OFL_1_1"></a>

```typescript
public readonly OFL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SIL Open Font License 1.1.

> [http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web)

---

##### `OFL_1_1_NO_RFN`<sup>Required</sup> <a name="OFL_1_1_NO_RFN" id="construct-hub.SpdxLicense.property.OFL_1_1_NO_RFN"></a>

```typescript
public readonly OFL_1_1_NO_RFN: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SIL Open Font License 1.1 with no Reserved Font Name.

> [http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web)

---

##### `OFL_1_1_RFN`<sup>Required</sup> <a name="OFL_1_1_RFN" id="construct-hub.SpdxLicense.property.OFL_1_1_RFN"></a>

```typescript
public readonly OFL_1_1_RFN: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SIL Open Font License 1.1 with Reserved Font Name.

> [http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web)

---

##### `OGC_1_0`<sup>Required</sup> <a name="OGC_1_0" id="construct-hub.SpdxLicense.property.OGC_1_0"></a>

```typescript
public readonly OGC_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

OGC Software License, Version 1.0.

> [https://www.ogc.org/ogc/software/1.0](https://www.ogc.org/ogc/software/1.0)

---

##### `OGL_CANADA_2_0`<sup>Required</sup> <a name="OGL_CANADA_2_0" id="construct-hub.SpdxLicense.property.OGL_CANADA_2_0"></a>

```typescript
public readonly OGL_CANADA_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Government Licence - Canada.

> [https://open.canada.ca/en/open-government-licence-canada](https://open.canada.ca/en/open-government-licence-canada)

---

##### `OGL_UK_1_0`<sup>Required</sup> <a name="OGL_UK_1_0" id="construct-hub.SpdxLicense.property.OGL_UK_1_0"></a>

```typescript
public readonly OGL_UK_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Government Licence v1.0.

> [http://www.nationalarchives.gov.uk/doc/open-government-licence/version/1/](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/1/)

---

##### `OGL_UK_2_0`<sup>Required</sup> <a name="OGL_UK_2_0" id="construct-hub.SpdxLicense.property.OGL_UK_2_0"></a>

```typescript
public readonly OGL_UK_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Government Licence v2.0.

> [http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/)

---

##### `OGL_UK_3_0`<sup>Required</sup> <a name="OGL_UK_3_0" id="construct-hub.SpdxLicense.property.OGL_UK_3_0"></a>

```typescript
public readonly OGL_UK_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Government Licence v3.0.

> [http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)

---

##### `OGTSL`<sup>Required</sup> <a name="OGTSL" id="construct-hub.SpdxLicense.property.OGTSL"></a>

```typescript
public readonly OGTSL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Group Test Suite License.

> [http://www.opengroup.org/testing/downloads/The_Open_Group_TSL.txt](http://www.opengroup.org/testing/downloads/The_Open_Group_TSL.txt)

---

##### `OLDAP_1_1`<sup>Required</sup> <a name="OLDAP_1_1" id="construct-hub.SpdxLicense.property.OLDAP_1_1"></a>

```typescript
public readonly OLDAP_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v1.1.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=806557a5ad59804ef3a44d5abfbe91d706b0791f](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=806557a5ad59804ef3a44d5abfbe91d706b0791f)

---

##### `OLDAP_1_2`<sup>Required</sup> <a name="OLDAP_1_2" id="construct-hub.SpdxLicense.property.OLDAP_1_2"></a>

```typescript
public readonly OLDAP_1_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v1.2.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=42b0383c50c299977b5893ee695cf4e486fb0dc7](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=42b0383c50c299977b5893ee695cf4e486fb0dc7)

---

##### `OLDAP_1_3`<sup>Required</sup> <a name="OLDAP_1_3" id="construct-hub.SpdxLicense.property.OLDAP_1_3"></a>

```typescript
public readonly OLDAP_1_3: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v1.3.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=e5f8117f0ce088d0bd7a8e18ddf37eaa40eb09b1](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=e5f8117f0ce088d0bd7a8e18ddf37eaa40eb09b1)

---

##### `OLDAP_1_4`<sup>Required</sup> <a name="OLDAP_1_4" id="construct-hub.SpdxLicense.property.OLDAP_1_4"></a>

```typescript
public readonly OLDAP_1_4: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v1.4.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=c9f95c2f3f2ffb5e0ae55fe7388af75547660941](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=c9f95c2f3f2ffb5e0ae55fe7388af75547660941)

---

##### `OLDAP_2_0`<sup>Required</sup> <a name="OLDAP_2_0" id="construct-hub.SpdxLicense.property.OLDAP_2_0"></a>

```typescript
public readonly OLDAP_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B).

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=cbf50f4e1185a21abd4c0a54d3f4341fe28f36ea](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=cbf50f4e1185a21abd4c0a54d3f4341fe28f36ea)

---

##### `OLDAP_2_0_1`<sup>Required</sup> <a name="OLDAP_2_0_1" id="construct-hub.SpdxLicense.property.OLDAP_2_0_1"></a>

```typescript
public readonly OLDAP_2_0_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.0.1.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=b6d68acd14e51ca3aab4428bf26522aa74873f0e](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=b6d68acd14e51ca3aab4428bf26522aa74873f0e)

---

##### `OLDAP_2_1`<sup>Required</sup> <a name="OLDAP_2_1" id="construct-hub.SpdxLicense.property.OLDAP_2_1"></a>

```typescript
public readonly OLDAP_2_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.1.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=b0d176738e96a0d3b9f85cb51e140a86f21be715](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=b0d176738e96a0d3b9f85cb51e140a86f21be715)

---

##### `OLDAP_2_2`<sup>Required</sup> <a name="OLDAP_2_2" id="construct-hub.SpdxLicense.property.OLDAP_2_2"></a>

```typescript
public readonly OLDAP_2_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.2.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=470b0c18ec67621c85881b2733057fecf4a1acc3](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=470b0c18ec67621c85881b2733057fecf4a1acc3)

---

##### `OLDAP_2_2_1`<sup>Required</sup> <a name="OLDAP_2_2_1" id="construct-hub.SpdxLicense.property.OLDAP_2_2_1"></a>

```typescript
public readonly OLDAP_2_2_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.2.1.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=4bc786f34b50aa301be6f5600f58a980070f481e](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=4bc786f34b50aa301be6f5600f58a980070f481e)

---

##### `OLDAP_2_2_2`<sup>Required</sup> <a name="OLDAP_2_2_2" id="construct-hub.SpdxLicense.property.OLDAP_2_2_2"></a>

```typescript
public readonly OLDAP_2_2_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License 2.2.2.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=df2cc1e21eb7c160695f5b7cffd6296c151ba188](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=df2cc1e21eb7c160695f5b7cffd6296c151ba188)

---

##### `OLDAP_2_3`<sup>Required</sup> <a name="OLDAP_2_3" id="construct-hub.SpdxLicense.property.OLDAP_2_3"></a>

```typescript
public readonly OLDAP_2_3: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.3.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=d32cf54a32d581ab475d23c810b0a7fbaf8d63c3](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=d32cf54a32d581ab475d23c810b0a7fbaf8d63c3)

---

##### `OLDAP_2_4`<sup>Required</sup> <a name="OLDAP_2_4" id="construct-hub.SpdxLicense.property.OLDAP_2_4"></a>

```typescript
public readonly OLDAP_2_4: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.4.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=cd1284c4a91a8a380d904eee68d1583f989ed386](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=cd1284c4a91a8a380d904eee68d1583f989ed386)

---

##### `OLDAP_2_5`<sup>Required</sup> <a name="OLDAP_2_5" id="construct-hub.SpdxLicense.property.OLDAP_2_5"></a>

```typescript
public readonly OLDAP_2_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.5.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=6852b9d90022e8593c98205413380536b1b5a7cf](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=6852b9d90022e8593c98205413380536b1b5a7cf)

---

##### `OLDAP_2_6`<sup>Required</sup> <a name="OLDAP_2_6" id="construct-hub.SpdxLicense.property.OLDAP_2_6"></a>

```typescript
public readonly OLDAP_2_6: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.6.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=1cae062821881f41b73012ba816434897abf4205](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=1cae062821881f41b73012ba816434897abf4205)

---

##### `OLDAP_2_7`<sup>Required</sup> <a name="OLDAP_2_7" id="construct-hub.SpdxLicense.property.OLDAP_2_7"></a>

```typescript
public readonly OLDAP_2_7: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.7.

> [http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=47c2415c1df81556eeb39be6cad458ef87c534a2](http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=47c2415c1df81556eeb39be6cad458ef87c534a2)

---

##### `OLDAP_2_8`<sup>Required</sup> <a name="OLDAP_2_8" id="construct-hub.SpdxLicense.property.OLDAP_2_8"></a>

```typescript
public readonly OLDAP_2_8: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open LDAP Public License v2.8.

> [http://www.openldap.org/software/release/license.html](http://www.openldap.org/software/release/license.html)

---

##### `OML`<sup>Required</sup> <a name="OML" id="construct-hub.SpdxLicense.property.OML"></a>

```typescript
public readonly OML: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Market License.

> [https://fedoraproject.org/wiki/Licensing/Open_Market_License](https://fedoraproject.org/wiki/Licensing/Open_Market_License)

---

##### `OPEN_SS_L`<sup>Required</sup> <a name="OPEN_SS_L" id="construct-hub.SpdxLicense.property.OPEN_SS_L"></a>

```typescript
public readonly OPEN_SS_L: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

OpenSSL License.

> [http://www.openssl.org/source/license.html](http://www.openssl.org/source/license.html)

---

##### `OPL_1_0`<sup>Required</sup> <a name="OPL_1_0" id="construct-hub.SpdxLicense.property.OPL_1_0"></a>

```typescript
public readonly OPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Public License v1.0.

> [http://old.koalateam.com/jackaroo/OPL_1_0.TXT](http://old.koalateam.com/jackaroo/OPL_1_0.TXT)

---

##### `OSET_PL_2_1`<sup>Required</sup> <a name="OSET_PL_2_1" id="construct-hub.SpdxLicense.property.OSET_PL_2_1"></a>

```typescript
public readonly OSET_PL_2_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

OSET Public License version 2.1.

> [http://www.osetfoundation.org/public-license](http://www.osetfoundation.org/public-license)

---

##### `OSL_1_0`<sup>Required</sup> <a name="OSL_1_0" id="construct-hub.SpdxLicense.property.OSL_1_0"></a>

```typescript
public readonly OSL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Software License 1.0.

> [https://opensource.org/licenses/OSL-1.0](https://opensource.org/licenses/OSL-1.0)

---

##### `OSL_1_1`<sup>Required</sup> <a name="OSL_1_1" id="construct-hub.SpdxLicense.property.OSL_1_1"></a>

```typescript
public readonly OSL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Software License 1.1.

> [https://fedoraproject.org/wiki/Licensing/OSL1.1](https://fedoraproject.org/wiki/Licensing/OSL1.1)

---

##### `OSL_2_0`<sup>Required</sup> <a name="OSL_2_0" id="construct-hub.SpdxLicense.property.OSL_2_0"></a>

```typescript
public readonly OSL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Software License 2.0.

> [http://web.archive.org/web/20041020171434/http://www.rosenlaw.com/osl2.0.html](http://web.archive.org/web/20041020171434/http://www.rosenlaw.com/osl2.0.html)

---

##### `OSL_2_1`<sup>Required</sup> <a name="OSL_2_1" id="construct-hub.SpdxLicense.property.OSL_2_1"></a>

```typescript
public readonly OSL_2_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Software License 2.1.

> [http://web.archive.org/web/20050212003940/http://www.rosenlaw.com/osl21.htm](http://web.archive.org/web/20050212003940/http://www.rosenlaw.com/osl21.htm)

---

##### `OSL_3_0`<sup>Required</sup> <a name="OSL_3_0" id="construct-hub.SpdxLicense.property.OSL_3_0"></a>

```typescript
public readonly OSL_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Open Software License 3.0.

> [https://web.archive.org/web/20120101081418/http://rosenlaw.com:80/OSL3.0.htm](https://web.archive.org/web/20120101081418/http://rosenlaw.com:80/OSL3.0.htm)

---

##### `PARITY_6_0_0`<sup>Required</sup> <a name="PARITY_6_0_0" id="construct-hub.SpdxLicense.property.PARITY_6_0_0"></a>

```typescript
public readonly PARITY_6_0_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

The Parity Public License 6.0.0.

> [https://paritylicense.com/versions/6.0.0.html](https://paritylicense.com/versions/6.0.0.html)

---

##### `PARITY_7_0_0`<sup>Required</sup> <a name="PARITY_7_0_0" id="construct-hub.SpdxLicense.property.PARITY_7_0_0"></a>

```typescript
public readonly PARITY_7_0_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

The Parity Public License 7.0.0.

> [https://paritylicense.com/versions/7.0.0.html](https://paritylicense.com/versions/7.0.0.html)

---

##### `PDDL_1_0`<sup>Required</sup> <a name="PDDL_1_0" id="construct-hub.SpdxLicense.property.PDDL_1_0"></a>

```typescript
public readonly PDDL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

ODC Public Domain Dedication & License 1.0.

> [http://opendatacommons.org/licenses/pddl/1.0/](http://opendatacommons.org/licenses/pddl/1.0/)

---

##### `PHP_3_0`<sup>Required</sup> <a name="PHP_3_0" id="construct-hub.SpdxLicense.property.PHP_3_0"></a>

```typescript
public readonly PHP_3_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

PHP License v3.0.

> [http://www.php.net/license/3_0.txt](http://www.php.net/license/3_0.txt)

---

##### `PHP_3_01`<sup>Required</sup> <a name="PHP_3_01" id="construct-hub.SpdxLicense.property.PHP_3_01"></a>

```typescript
public readonly PHP_3_01: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

PHP License v3.01.

> [http://www.php.net/license/3_01.txt](http://www.php.net/license/3_01.txt)

---

##### `PLEXUS`<sup>Required</sup> <a name="PLEXUS" id="construct-hub.SpdxLicense.property.PLEXUS"></a>

```typescript
public readonly PLEXUS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Plexus Classworlds License.

> [https://fedoraproject.org/wiki/Licensing/Plexus_Classworlds_License](https://fedoraproject.org/wiki/Licensing/Plexus_Classworlds_License)

---

##### `POLYFORM_NONCOMMERCIAL_1_0_0`<sup>Required</sup> <a name="POLYFORM_NONCOMMERCIAL_1_0_0" id="construct-hub.SpdxLicense.property.POLYFORM_NONCOMMERCIAL_1_0_0"></a>

```typescript
public readonly POLYFORM_NONCOMMERCIAL_1_0_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

PolyForm Noncommercial License 1.0.0.

> [https://polyformproject.org/licenses/noncommercial/1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0)

---

##### `POLYFORM_SMALL_BUSINESS_1_0_0`<sup>Required</sup> <a name="POLYFORM_SMALL_BUSINESS_1_0_0" id="construct-hub.SpdxLicense.property.POLYFORM_SMALL_BUSINESS_1_0_0"></a>

```typescript
public readonly POLYFORM_SMALL_BUSINESS_1_0_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

PolyForm Small Business License 1.0.0.

> [https://polyformproject.org/licenses/small-business/1.0.0](https://polyformproject.org/licenses/small-business/1.0.0)

---

##### `POSTGRE_SQ_L`<sup>Required</sup> <a name="POSTGRE_SQ_L" id="construct-hub.SpdxLicense.property.POSTGRE_SQ_L"></a>

```typescript
public readonly POSTGRE_SQ_L: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

PostgreSQL License.

> [http://www.postgresql.org/about/licence](http://www.postgresql.org/about/licence)

---

##### `PSF_2_0`<sup>Required</sup> <a name="PSF_2_0" id="construct-hub.SpdxLicense.property.PSF_2_0"></a>

```typescript
public readonly PSF_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Python Software Foundation License 2.0.

> [https://opensource.org/licenses/Python-2.0](https://opensource.org/licenses/Python-2.0)

---

##### `PSFRAG`<sup>Required</sup> <a name="PSFRAG" id="construct-hub.SpdxLicense.property.PSFRAG"></a>

```typescript
public readonly PSFRAG: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

psfrag License.

> [https://fedoraproject.org/wiki/Licensing/psfrag](https://fedoraproject.org/wiki/Licensing/psfrag)

---

##### `PSUTILS`<sup>Required</sup> <a name="PSUTILS" id="construct-hub.SpdxLicense.property.PSUTILS"></a>

```typescript
public readonly PSUTILS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

psutils License.

> [https://fedoraproject.org/wiki/Licensing/psutils](https://fedoraproject.org/wiki/Licensing/psutils)

---

##### `PYTHON_2_0`<sup>Required</sup> <a name="PYTHON_2_0" id="construct-hub.SpdxLicense.property.PYTHON_2_0"></a>

```typescript
public readonly PYTHON_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Python License 2.0.

> [https://opensource.org/licenses/Python-2.0](https://opensource.org/licenses/Python-2.0)

---

##### `QHULL`<sup>Required</sup> <a name="QHULL" id="construct-hub.SpdxLicense.property.QHULL"></a>

```typescript
public readonly QHULL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Qhull License.

> [https://fedoraproject.org/wiki/Licensing/Qhull](https://fedoraproject.org/wiki/Licensing/Qhull)

---

##### `QPL_1_0`<sup>Required</sup> <a name="QPL_1_0" id="construct-hub.SpdxLicense.property.QPL_1_0"></a>

```typescript
public readonly QPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Q Public License 1.0.

> [http://doc.qt.nokia.com/3.3/license.html](http://doc.qt.nokia.com/3.3/license.html)

---

##### `RDISC`<sup>Required</sup> <a name="RDISC" id="construct-hub.SpdxLicense.property.RDISC"></a>

```typescript
public readonly RDISC: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Rdisc License.

> [https://fedoraproject.org/wiki/Licensing/Rdisc_License](https://fedoraproject.org/wiki/Licensing/Rdisc_License)

---

##### `RHECOS_1_1`<sup>Required</sup> <a name="RHECOS_1_1" id="construct-hub.SpdxLicense.property.RHECOS_1_1"></a>

```typescript
public readonly RHECOS_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Red Hat eCos Public License v1.1.

> [http://ecos.sourceware.org/old-license.html](http://ecos.sourceware.org/old-license.html)

---

##### `RPL_1_1`<sup>Required</sup> <a name="RPL_1_1" id="construct-hub.SpdxLicense.property.RPL_1_1"></a>

```typescript
public readonly RPL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Reciprocal Public License 1.1.

> [https://opensource.org/licenses/RPL-1.1](https://opensource.org/licenses/RPL-1.1)

---

##### `RPL_1_5`<sup>Required</sup> <a name="RPL_1_5" id="construct-hub.SpdxLicense.property.RPL_1_5"></a>

```typescript
public readonly RPL_1_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Reciprocal Public License 1.5.

> [https://opensource.org/licenses/RPL-1.5](https://opensource.org/licenses/RPL-1.5)

---

##### `RPSL_1_0`<sup>Required</sup> <a name="RPSL_1_0" id="construct-hub.SpdxLicense.property.RPSL_1_0"></a>

```typescript
public readonly RPSL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

RealNetworks Public Source License v1.0.

> [https://helixcommunity.org/content/rpsl](https://helixcommunity.org/content/rpsl)

---

##### `RSA_MD`<sup>Required</sup> <a name="RSA_MD" id="construct-hub.SpdxLicense.property.RSA_MD"></a>

```typescript
public readonly RSA_MD: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

RSA Message-Digest License.

> [http://www.faqs.org/rfcs/rfc1321.html](http://www.faqs.org/rfcs/rfc1321.html)

---

##### `RSCPL`<sup>Required</sup> <a name="RSCPL" id="construct-hub.SpdxLicense.property.RSCPL"></a>

```typescript
public readonly RSCPL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Ricoh Source Code Public License.

> [http://wayback.archive.org/web/20060715140826/http://www.risource.org/RPL/RPL-1.0A.shtml](http://wayback.archive.org/web/20060715140826/http://www.risource.org/RPL/RPL-1.0A.shtml)

---

##### `RUBY`<sup>Required</sup> <a name="RUBY" id="construct-hub.SpdxLicense.property.RUBY"></a>

```typescript
public readonly RUBY: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Ruby License.

> [http://www.ruby-lang.org/en/LICENSE.txt](http://www.ruby-lang.org/en/LICENSE.txt)

---

##### `SAX_PD`<sup>Required</sup> <a name="SAX_PD" id="construct-hub.SpdxLicense.property.SAX_PD"></a>

```typescript
public readonly SAX_PD: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Sax Public Domain Notice.

> [http://www.saxproject.org/copying.html](http://www.saxproject.org/copying.html)

---

##### `SAXPATH`<sup>Required</sup> <a name="SAXPATH" id="construct-hub.SpdxLicense.property.SAXPATH"></a>

```typescript
public readonly SAXPATH: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Saxpath License.

> [https://fedoraproject.org/wiki/Licensing/Saxpath_License](https://fedoraproject.org/wiki/Licensing/Saxpath_License)

---

##### `SCEA`<sup>Required</sup> <a name="SCEA" id="construct-hub.SpdxLicense.property.SCEA"></a>

```typescript
public readonly SCEA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SCEA Shared Source License.

> [http://research.scea.com/scea_shared_source_license.html](http://research.scea.com/scea_shared_source_license.html)

---

##### `SENDMAIL`<sup>Required</sup> <a name="SENDMAIL" id="construct-hub.SpdxLicense.property.SENDMAIL"></a>

```typescript
public readonly SENDMAIL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Sendmail License.

> [http://www.sendmail.com/pdfs/open_source/sendmail_license.pdf](http://www.sendmail.com/pdfs/open_source/sendmail_license.pdf)

---

##### `SENDMAIL_8_23`<sup>Required</sup> <a name="SENDMAIL_8_23" id="construct-hub.SpdxLicense.property.SENDMAIL_8_23"></a>

```typescript
public readonly SENDMAIL_8_23: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Sendmail License 8.23.

> [https://www.proofpoint.com/sites/default/files/sendmail-license.pdf](https://www.proofpoint.com/sites/default/files/sendmail-license.pdf)

---

##### `SGI_B_1_0`<sup>Required</sup> <a name="SGI_B_1_0" id="construct-hub.SpdxLicense.property.SGI_B_1_0"></a>

```typescript
public readonly SGI_B_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SGI Free Software License B v1.0.

> [http://oss.sgi.com/projects/FreeB/SGIFreeSWLicB.1.0.html](http://oss.sgi.com/projects/FreeB/SGIFreeSWLicB.1.0.html)

---

##### `SGI_B_1_1`<sup>Required</sup> <a name="SGI_B_1_1" id="construct-hub.SpdxLicense.property.SGI_B_1_1"></a>

```typescript
public readonly SGI_B_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SGI Free Software License B v1.1.

> [http://oss.sgi.com/projects/FreeB/](http://oss.sgi.com/projects/FreeB/)

---

##### `SGI_B_2_0`<sup>Required</sup> <a name="SGI_B_2_0" id="construct-hub.SpdxLicense.property.SGI_B_2_0"></a>

```typescript
public readonly SGI_B_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SGI Free Software License B v2.0.

> [http://oss.sgi.com/projects/FreeB/SGIFreeSWLicB.2.0.pdf](http://oss.sgi.com/projects/FreeB/SGIFreeSWLicB.2.0.pdf)

---

##### `SHL_0_5`<sup>Required</sup> <a name="SHL_0_5" id="construct-hub.SpdxLicense.property.SHL_0_5"></a>

```typescript
public readonly SHL_0_5: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Solderpad Hardware License v0.5.

> [https://solderpad.org/licenses/SHL-0.5/](https://solderpad.org/licenses/SHL-0.5/)

---

##### `SHL_0_51`<sup>Required</sup> <a name="SHL_0_51" id="construct-hub.SpdxLicense.property.SHL_0_51"></a>

```typescript
public readonly SHL_0_51: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Solderpad Hardware License, Version 0.51.

> [https://solderpad.org/licenses/SHL-0.51/](https://solderpad.org/licenses/SHL-0.51/)

---

##### `SIMPL_2_0`<sup>Required</sup> <a name="SIMPL_2_0" id="construct-hub.SpdxLicense.property.SIMPL_2_0"></a>

```typescript
public readonly SIMPL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Simple Public License 2.0.

> [https://opensource.org/licenses/SimPL-2.0](https://opensource.org/licenses/SimPL-2.0)

---

##### `SISSL`<sup>Required</sup> <a name="SISSL" id="construct-hub.SpdxLicense.property.SISSL"></a>

```typescript
public readonly SISSL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Sun Industry Standards Source License v1.1.

> [http://www.openoffice.org/licenses/sissl_license.html](http://www.openoffice.org/licenses/sissl_license.html)

---

##### `SISSL_1_2`<sup>Required</sup> <a name="SISSL_1_2" id="construct-hub.SpdxLicense.property.SISSL_1_2"></a>

```typescript
public readonly SISSL_1_2: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Sun Industry Standards Source License v1.2.

> [http://gridscheduler.sourceforge.net/Gridengine_SISSL_license.html](http://gridscheduler.sourceforge.net/Gridengine_SISSL_license.html)

---

##### `SLEEPYCAT`<sup>Required</sup> <a name="SLEEPYCAT" id="construct-hub.SpdxLicense.property.SLEEPYCAT"></a>

```typescript
public readonly SLEEPYCAT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Sleepycat License.

> [https://opensource.org/licenses/Sleepycat](https://opensource.org/licenses/Sleepycat)

---

##### `SMLNJ`<sup>Required</sup> <a name="SMLNJ" id="construct-hub.SpdxLicense.property.SMLNJ"></a>

```typescript
public readonly SMLNJ: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Standard ML of New Jersey License.

> [https://www.smlnj.org/license.html](https://www.smlnj.org/license.html)

---

##### `SMPPL`<sup>Required</sup> <a name="SMPPL" id="construct-hub.SpdxLicense.property.SMPPL"></a>

```typescript
public readonly SMPPL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Secure Messaging Protocol Public License.

> [https://github.com/dcblake/SMP/blob/master/Documentation/License.txt](https://github.com/dcblake/SMP/blob/master/Documentation/License.txt)

---

##### `SNIA`<sup>Required</sup> <a name="SNIA" id="construct-hub.SpdxLicense.property.SNIA"></a>

```typescript
public readonly SNIA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SNIA Public License 1.1.

> [https://fedoraproject.org/wiki/Licensing/SNIA_Public_License](https://fedoraproject.org/wiki/Licensing/SNIA_Public_License)

---

##### `SPENCER_86`<sup>Required</sup> <a name="SPENCER_86" id="construct-hub.SpdxLicense.property.SPENCER_86"></a>

```typescript
public readonly SPENCER_86: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Spencer License 86.

> [https://fedoraproject.org/wiki/Licensing/Henry_Spencer_Reg-Ex_Library_License](https://fedoraproject.org/wiki/Licensing/Henry_Spencer_Reg-Ex_Library_License)

---

##### `SPENCER_94`<sup>Required</sup> <a name="SPENCER_94" id="construct-hub.SpdxLicense.property.SPENCER_94"></a>

```typescript
public readonly SPENCER_94: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Spencer License 94.

> [https://fedoraproject.org/wiki/Licensing/Henry_Spencer_Reg-Ex_Library_License](https://fedoraproject.org/wiki/Licensing/Henry_Spencer_Reg-Ex_Library_License)

---

##### `SPENCER_99`<sup>Required</sup> <a name="SPENCER_99" id="construct-hub.SpdxLicense.property.SPENCER_99"></a>

```typescript
public readonly SPENCER_99: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Spencer License 99.

> [http://www.opensource.apple.com/source/tcl/tcl-5/tcl/generic/regfronts.c](http://www.opensource.apple.com/source/tcl/tcl-5/tcl/generic/regfronts.c)

---

##### `SPL_1_0`<sup>Required</sup> <a name="SPL_1_0" id="construct-hub.SpdxLicense.property.SPL_1_0"></a>

```typescript
public readonly SPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Sun Public License v1.0.

> [https://opensource.org/licenses/SPL-1.0](https://opensource.org/licenses/SPL-1.0)

---

##### `SSH_OPENSSH`<sup>Required</sup> <a name="SSH_OPENSSH" id="construct-hub.SpdxLicense.property.SSH_OPENSSH"></a>

```typescript
public readonly SSH_OPENSSH: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SSH OpenSSH license.

> [https://github.com/openssh/openssh-portable/blob/1b11ea7c58cd5c59838b5fa574cd456d6047b2d4/LICENCE#L10](https://github.com/openssh/openssh-portable/blob/1b11ea7c58cd5c59838b5fa574cd456d6047b2d4/LICENCE#L10)

---

##### `SSH_SHORT`<sup>Required</sup> <a name="SSH_SHORT" id="construct-hub.SpdxLicense.property.SSH_SHORT"></a>

```typescript
public readonly SSH_SHORT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SSH short notice.

> [https://github.com/openssh/openssh-portable/blob/1b11ea7c58cd5c59838b5fa574cd456d6047b2d4/pathnames.h](https://github.com/openssh/openssh-portable/blob/1b11ea7c58cd5c59838b5fa574cd456d6047b2d4/pathnames.h)

---

##### `SSPL_1_0`<sup>Required</sup> <a name="SSPL_1_0" id="construct-hub.SpdxLicense.property.SSPL_1_0"></a>

```typescript
public readonly SSPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Server Side Public License, v 1.

> [https://www.mongodb.com/licensing/server-side-public-license](https://www.mongodb.com/licensing/server-side-public-license)

---

##### `STANDARDML_NJ`<sup>Required</sup> <a name="STANDARDML_NJ" id="construct-hub.SpdxLicense.property.STANDARDML_NJ"></a>

```typescript
public readonly STANDARDML_NJ: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Standard ML of New Jersey License.

> [http://www.smlnj.org//license.html](http://www.smlnj.org//license.html)

---

##### `SUGARCRM_1_1_3`<sup>Required</sup> <a name="SUGARCRM_1_1_3" id="construct-hub.SpdxLicense.property.SUGARCRM_1_1_3"></a>

```typescript
public readonly SUGARCRM_1_1_3: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

SugarCRM Public License v1.1.3.

> [http://www.sugarcrm.com/crm/SPL](http://www.sugarcrm.com/crm/SPL)

---

##### `SWL`<sup>Required</sup> <a name="SWL" id="construct-hub.SpdxLicense.property.SWL"></a>

```typescript
public readonly SWL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Scheme Widget Library (SWL) Software License Agreement.

> [https://fedoraproject.org/wiki/Licensing/SWL](https://fedoraproject.org/wiki/Licensing/SWL)

---

##### `TAPR_OHL_1_0`<sup>Required</sup> <a name="TAPR_OHL_1_0" id="construct-hub.SpdxLicense.property.TAPR_OHL_1_0"></a>

```typescript
public readonly TAPR_OHL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

TAPR Open Hardware License v1.0.

> [https://www.tapr.org/OHL](https://www.tapr.org/OHL)

---

##### `TCL`<sup>Required</sup> <a name="TCL" id="construct-hub.SpdxLicense.property.TCL"></a>

```typescript
public readonly TCL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

TCL/TK License.

> [http://www.tcl.tk/software/tcltk/license.html](http://www.tcl.tk/software/tcltk/license.html)

---

##### `TCP_WRAPPERS`<sup>Required</sup> <a name="TCP_WRAPPERS" id="construct-hub.SpdxLicense.property.TCP_WRAPPERS"></a>

```typescript
public readonly TCP_WRAPPERS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

TCP Wrappers License.

> [http://rc.quest.com/topics/openssh/license.php#tcpwrappers](http://rc.quest.com/topics/openssh/license.php#tcpwrappers)

---

##### `TMATE`<sup>Required</sup> <a name="TMATE" id="construct-hub.SpdxLicense.property.TMATE"></a>

```typescript
public readonly TMATE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

TMate Open Source License.

> [http://svnkit.com/license.html](http://svnkit.com/license.html)

---

##### `TORQUE_1_1`<sup>Required</sup> <a name="TORQUE_1_1" id="construct-hub.SpdxLicense.property.TORQUE_1_1"></a>

```typescript
public readonly TORQUE_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

TORQUE v2.5+ Software License v1.1.

> [https://fedoraproject.org/wiki/Licensing/TORQUEv1.1](https://fedoraproject.org/wiki/Licensing/TORQUEv1.1)

---

##### `TOSL`<sup>Required</sup> <a name="TOSL" id="construct-hub.SpdxLicense.property.TOSL"></a>

```typescript
public readonly TOSL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Trusster Open Source License.

> [https://fedoraproject.org/wiki/Licensing/TOSL](https://fedoraproject.org/wiki/Licensing/TOSL)

---

##### `TU_BERLIN_1_0`<sup>Required</sup> <a name="TU_BERLIN_1_0" id="construct-hub.SpdxLicense.property.TU_BERLIN_1_0"></a>

```typescript
public readonly TU_BERLIN_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Technische Universitaet Berlin License 1.0.

> [https://github.com/swh/ladspa/blob/7bf6f3799fdba70fda297c2d8fd9f526803d9680/gsm/COPYRIGHT](https://github.com/swh/ladspa/blob/7bf6f3799fdba70fda297c2d8fd9f526803d9680/gsm/COPYRIGHT)

---

##### `TU_BERLIN_2_0`<sup>Required</sup> <a name="TU_BERLIN_2_0" id="construct-hub.SpdxLicense.property.TU_BERLIN_2_0"></a>

```typescript
public readonly TU_BERLIN_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Technische Universitaet Berlin License 2.0.

> [https://github.com/CorsixTH/deps/blob/fd339a9f526d1d9c9f01ccf39e438a015da50035/licences/libgsm.txt](https://github.com/CorsixTH/deps/blob/fd339a9f526d1d9c9f01ccf39e438a015da50035/licences/libgsm.txt)

---

##### `UCL_1_0`<sup>Required</sup> <a name="UCL_1_0" id="construct-hub.SpdxLicense.property.UCL_1_0"></a>

```typescript
public readonly UCL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Upstream Compatibility License v1.0.

> [https://opensource.org/licenses/UCL-1.0](https://opensource.org/licenses/UCL-1.0)

---

##### `UNICODE_DFS_2015`<sup>Required</sup> <a name="UNICODE_DFS_2015" id="construct-hub.SpdxLicense.property.UNICODE_DFS_2015"></a>

```typescript
public readonly UNICODE_DFS_2015: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Unicode License Agreement - Data Files and Software (2015).

> [https://web.archive.org/web/20151224134844/http://unicode.org/copyright.html](https://web.archive.org/web/20151224134844/http://unicode.org/copyright.html)

---

##### `UNICODE_DFS_2016`<sup>Required</sup> <a name="UNICODE_DFS_2016" id="construct-hub.SpdxLicense.property.UNICODE_DFS_2016"></a>

```typescript
public readonly UNICODE_DFS_2016: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Unicode License Agreement - Data Files and Software (2016).

> [http://www.unicode.org/copyright.html](http://www.unicode.org/copyright.html)

---

##### `UNICODE_TOU`<sup>Required</sup> <a name="UNICODE_TOU" id="construct-hub.SpdxLicense.property.UNICODE_TOU"></a>

```typescript
public readonly UNICODE_TOU: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Unicode Terms of Use.

> [http://www.unicode.org/copyright.html](http://www.unicode.org/copyright.html)

---

##### `UNLICENSE`<sup>Required</sup> <a name="UNLICENSE" id="construct-hub.SpdxLicense.property.UNLICENSE"></a>

```typescript
public readonly UNLICENSE: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

The Unlicense.

> [https://unlicense.org/](https://unlicense.org/)

---

##### `UNLICENSED`<sup>Required</sup> <a name="UNLICENSED" id="construct-hub.SpdxLicense.property.UNLICENSED"></a>

```typescript
public readonly UNLICENSED: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Packages that have not been licensed.

---

##### `UPL_1_0`<sup>Required</sup> <a name="UPL_1_0" id="construct-hub.SpdxLicense.property.UPL_1_0"></a>

```typescript
public readonly UPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Universal Permissive License v1.0.

> [https://opensource.org/licenses/UPL](https://opensource.org/licenses/UPL)

---

##### `VIM`<sup>Required</sup> <a name="VIM" id="construct-hub.SpdxLicense.property.VIM"></a>

```typescript
public readonly VIM: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Vim License.

> [http://vimdoc.sourceforge.net/htmldoc/uganda.html](http://vimdoc.sourceforge.net/htmldoc/uganda.html)

---

##### `VOSTROM`<sup>Required</sup> <a name="VOSTROM" id="construct-hub.SpdxLicense.property.VOSTROM"></a>

```typescript
public readonly VOSTROM: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

VOSTROM Public License for Open Source.

> [https://fedoraproject.org/wiki/Licensing/VOSTROM](https://fedoraproject.org/wiki/Licensing/VOSTROM)

---

##### `VSL_1_0`<sup>Required</sup> <a name="VSL_1_0" id="construct-hub.SpdxLicense.property.VSL_1_0"></a>

```typescript
public readonly VSL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Vovida Software License v1.0.

> [https://opensource.org/licenses/VSL-1.0](https://opensource.org/licenses/VSL-1.0)

---

##### `W3_C`<sup>Required</sup> <a name="W3_C" id="construct-hub.SpdxLicense.property.W3_C"></a>

```typescript
public readonly W3_C: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

W3C Software Notice and License (2002-12-31).

> [http://www.w3.org/Consortium/Legal/2002/copyright-software-20021231.html](http://www.w3.org/Consortium/Legal/2002/copyright-software-20021231.html)

---

##### `W3C_19980720`<sup>Required</sup> <a name="W3C_19980720" id="construct-hub.SpdxLicense.property.W3C_19980720"></a>

```typescript
public readonly W3C_19980720: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

W3C Software Notice and License (1998-07-20).

> [http://www.w3.org/Consortium/Legal/copyright-software-19980720.html](http://www.w3.org/Consortium/Legal/copyright-software-19980720.html)

---

##### `W3C_20150513`<sup>Required</sup> <a name="W3C_20150513" id="construct-hub.SpdxLicense.property.W3C_20150513"></a>

```typescript
public readonly W3C_20150513: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

W3C Software Notice and Document License (2015-05-13).

> [https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document)

---

##### `WATCOM_1_0`<sup>Required</sup> <a name="WATCOM_1_0" id="construct-hub.SpdxLicense.property.WATCOM_1_0"></a>

```typescript
public readonly WATCOM_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Sybase Open Watcom Public License 1.0.

> [https://opensource.org/licenses/Watcom-1.0](https://opensource.org/licenses/Watcom-1.0)

---

##### `WSUIPA`<sup>Required</sup> <a name="WSUIPA" id="construct-hub.SpdxLicense.property.WSUIPA"></a>

```typescript
public readonly WSUIPA: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Wsuipa License.

> [https://fedoraproject.org/wiki/Licensing/Wsuipa](https://fedoraproject.org/wiki/Licensing/Wsuipa)

---

##### `WTFPL`<sup>Required</sup> <a name="WTFPL" id="construct-hub.SpdxLicense.property.WTFPL"></a>

```typescript
public readonly WTFPL: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Do What The F*ck You Want To Public License.

> [http://www.wtfpl.net/about/](http://www.wtfpl.net/about/)

---

##### `WX_WINDOWS`<sup>Required</sup> <a name="WX_WINDOWS" id="construct-hub.SpdxLicense.property.WX_WINDOWS"></a>

```typescript
public readonly WX_WINDOWS: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

wxWindows Library License.

> [https://opensource.org/licenses/WXwindows](https://opensource.org/licenses/WXwindows)

---

##### `X11`<sup>Required</sup> <a name="X11" id="construct-hub.SpdxLicense.property.X11"></a>

```typescript
public readonly X11: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

X11 License.

> [http://www.xfree86.org/3.3.6/COPYRIGHT2.html#3](http://www.xfree86.org/3.3.6/COPYRIGHT2.html#3)

---

##### `XEROX`<sup>Required</sup> <a name="XEROX" id="construct-hub.SpdxLicense.property.XEROX"></a>

```typescript
public readonly XEROX: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Xerox License.

> [https://fedoraproject.org/wiki/Licensing/Xerox](https://fedoraproject.org/wiki/Licensing/Xerox)

---

##### `XFREE86_1_1`<sup>Required</sup> <a name="XFREE86_1_1" id="construct-hub.SpdxLicense.property.XFREE86_1_1"></a>

```typescript
public readonly XFREE86_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

XFree86 License 1.1.

> [http://www.xfree86.org/current/LICENSE4.html](http://www.xfree86.org/current/LICENSE4.html)

---

##### `XINETD`<sup>Required</sup> <a name="XINETD" id="construct-hub.SpdxLicense.property.XINETD"></a>

```typescript
public readonly XINETD: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

xinetd License.

> [https://fedoraproject.org/wiki/Licensing/Xinetd_License](https://fedoraproject.org/wiki/Licensing/Xinetd_License)

---

##### `XNET`<sup>Required</sup> <a name="XNET" id="construct-hub.SpdxLicense.property.XNET"></a>

```typescript
public readonly XNET: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

X.Net License.

> [https://opensource.org/licenses/Xnet](https://opensource.org/licenses/Xnet)

---

##### `XPP`<sup>Required</sup> <a name="XPP" id="construct-hub.SpdxLicense.property.XPP"></a>

```typescript
public readonly XPP: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

XPP License.

> [https://fedoraproject.org/wiki/Licensing/xpp](https://fedoraproject.org/wiki/Licensing/xpp)

---

##### `XSKAT`<sup>Required</sup> <a name="XSKAT" id="construct-hub.SpdxLicense.property.XSKAT"></a>

```typescript
public readonly XSKAT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

XSkat License.

> [https://fedoraproject.org/wiki/Licensing/XSkat_License](https://fedoraproject.org/wiki/Licensing/XSkat_License)

---

##### `YPL_1_0`<sup>Required</sup> <a name="YPL_1_0" id="construct-hub.SpdxLicense.property.YPL_1_0"></a>

```typescript
public readonly YPL_1_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Yahoo!

Public License v1.0

> [http://www.zimbra.com/license/yahoo_public_license_1.0.html](http://www.zimbra.com/license/yahoo_public_license_1.0.html)

---

##### `YPL_1_1`<sup>Required</sup> <a name="YPL_1_1" id="construct-hub.SpdxLicense.property.YPL_1_1"></a>

```typescript
public readonly YPL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Yahoo!

Public License v1.1

> [http://www.zimbra.com/license/yahoo_public_license_1.1.html](http://www.zimbra.com/license/yahoo_public_license_1.1.html)

---

##### `ZED`<sup>Required</sup> <a name="ZED" id="construct-hub.SpdxLicense.property.ZED"></a>

```typescript
public readonly ZED: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Zed License.

> [https://fedoraproject.org/wiki/Licensing/Zed](https://fedoraproject.org/wiki/Licensing/Zed)

---

##### `ZEND_2_0`<sup>Required</sup> <a name="ZEND_2_0" id="construct-hub.SpdxLicense.property.ZEND_2_0"></a>

```typescript
public readonly ZEND_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Zend License v2.0.

> [https://web.archive.org/web/20130517195954/http://www.zend.com/license/2_00.txt](https://web.archive.org/web/20130517195954/http://www.zend.com/license/2_00.txt)

---

##### `ZERO_BSD`<sup>Required</sup> <a name="ZERO_BSD" id="construct-hub.SpdxLicense.property.ZERO_BSD"></a>

```typescript
public readonly ZERO_BSD: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

BSD Zero Clause License.

> [http://landley.net/toybox/license.html](http://landley.net/toybox/license.html)

---

##### `ZIMBRA_1_3`<sup>Required</sup> <a name="ZIMBRA_1_3" id="construct-hub.SpdxLicense.property.ZIMBRA_1_3"></a>

```typescript
public readonly ZIMBRA_1_3: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Zimbra Public License v1.3.

> [http://web.archive.org/web/20100302225219/http://www.zimbra.com/license/zimbra-public-license-1-3.html](http://web.archive.org/web/20100302225219/http://www.zimbra.com/license/zimbra-public-license-1-3.html)

---

##### `ZIMBRA_1_4`<sup>Required</sup> <a name="ZIMBRA_1_4" id="construct-hub.SpdxLicense.property.ZIMBRA_1_4"></a>

```typescript
public readonly ZIMBRA_1_4: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Zimbra Public License v1.4.

> [http://www.zimbra.com/legal/zimbra-public-license-1-4](http://www.zimbra.com/legal/zimbra-public-license-1-4)

---

##### `ZLIB`<sup>Required</sup> <a name="ZLIB" id="construct-hub.SpdxLicense.property.ZLIB"></a>

```typescript
public readonly ZLIB: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

zlib License.

> [http://www.zlib.net/zlib_license.html](http://www.zlib.net/zlib_license.html)

---

##### `ZLIB_ACKNOWLEDGEMENT`<sup>Required</sup> <a name="ZLIB_ACKNOWLEDGEMENT" id="construct-hub.SpdxLicense.property.ZLIB_ACKNOWLEDGEMENT"></a>

```typescript
public readonly ZLIB_ACKNOWLEDGEMENT: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

zlib/libpng License with Acknowledgement.

> [https://fedoraproject.org/wiki/Licensing/ZlibWithAcknowledgement](https://fedoraproject.org/wiki/Licensing/ZlibWithAcknowledgement)

---

##### `ZPL_1_1`<sup>Required</sup> <a name="ZPL_1_1" id="construct-hub.SpdxLicense.property.ZPL_1_1"></a>

```typescript
public readonly ZPL_1_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Zope Public License 1.1.

> [http://old.zope.org/Resources/License/ZPL-1.1](http://old.zope.org/Resources/License/ZPL-1.1)

---

##### `ZPL_2_0`<sup>Required</sup> <a name="ZPL_2_0" id="construct-hub.SpdxLicense.property.ZPL_2_0"></a>

```typescript
public readonly ZPL_2_0: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Zope Public License 2.0.

> [http://old.zope.org/Resources/License/ZPL-2.0](http://old.zope.org/Resources/License/ZPL-2.0)

---

##### `ZPL_2_1`<sup>Required</sup> <a name="ZPL_2_1" id="construct-hub.SpdxLicense.property.ZPL_2_1"></a>

```typescript
public readonly ZPL_2_1: SpdxLicense;
```

- *Type:* <a href="#construct-hub.SpdxLicense">SpdxLicense</a>

Zope Public License 2.1.

> [http://old.zope.org/Resources/ZPL/](http://old.zope.org/Resources/ZPL/)

---

### TagCondition <a name="TagCondition" id="construct-hub.TagCondition"></a>

Condition for applying a custom tag to a package.

#### Initializers <a name="Initializers" id="construct-hub.TagCondition.Initializer"></a>

```typescript
import { TagCondition } from 'construct-hub'

new TagCondition()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.TagCondition.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="construct-hub.TagCondition.bind"></a>

```typescript
public bind(): TagConditionConfig
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.TagCondition.and">and</a></code> | Create an && condition which applies only when all condition arguments are true. |
| <code><a href="#construct-hub.TagCondition.field">field</a></code> | Target a field within the `package.json` to assert against. Nested fields can be accessed by passing multiple keys. `TagCondition.field('key1', 'key2')` will access `packageJson?.key1?.key2`. |
| <code><a href="#construct-hub.TagCondition.not">not</a></code> | Create a ! |
| <code><a href="#construct-hub.TagCondition.or">or</a></code> | Create an \|\| condition which applies if any of the condition arguments are true. |
| <code><a href="#construct-hub.TagCondition.readme">readme</a></code> | Create a condition with logic targeting the README of the package. |

---

##### `and` <a name="and" id="construct-hub.TagCondition.and"></a>

```typescript
import { TagCondition } from 'construct-hub'

TagCondition.and(conds: TagCondition)
```

Create an && condition which applies only when all condition arguments are true.

###### `conds`<sup>Required</sup> <a name="conds" id="construct-hub.TagCondition.and.parameter.conds"></a>

- *Type:* <a href="#construct-hub.TagCondition">TagCondition</a>

---

##### `field` <a name="field" id="construct-hub.TagCondition.field"></a>

```typescript
import { TagCondition } from 'construct-hub'

TagCondition.field(keys: string)
```

Target a field within the `package.json` to assert against. Nested fields can be accessed by passing multiple keys. `TagCondition.field('key1', 'key2')` will access `packageJson?.key1?.key2`.

###### `keys`<sup>Required</sup> <a name="keys" id="construct-hub.TagCondition.field.parameter.keys"></a>

- *Type:* string

---

##### `not` <a name="not" id="construct-hub.TagCondition.not"></a>

```typescript
import { TagCondition } from 'construct-hub'

TagCondition.not(conds: TagCondition)
```

Create a !

condition which applies if the condition argument is false

###### `conds`<sup>Required</sup> <a name="conds" id="construct-hub.TagCondition.not.parameter.conds"></a>

- *Type:* <a href="#construct-hub.TagCondition">TagCondition</a>

---

##### `or` <a name="or" id="construct-hub.TagCondition.or"></a>

```typescript
import { TagCondition } from 'construct-hub'

TagCondition.or(conds: TagCondition)
```

Create an || condition which applies if any of the condition arguments are true.

###### `conds`<sup>Required</sup> <a name="conds" id="construct-hub.TagCondition.or.parameter.conds"></a>

- *Type:* <a href="#construct-hub.TagCondition">TagCondition</a>

---

##### `readme` <a name="readme" id="construct-hub.TagCondition.readme"></a>

```typescript
import { TagCondition } from 'construct-hub'

TagCondition.readme()
```

Create a condition with logic targeting the README of the package.



### TagConditionField <a name="TagConditionField" id="construct-hub.TagConditionField"></a>

Target a field to use in logic to dictate whether a tag is relevant.

#### Initializers <a name="Initializers" id="construct-hub.TagConditionField.Initializer"></a>

```typescript
import { TagConditionField } from 'construct-hub'

new TagConditionField(field: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#construct-hub.TagConditionField.Initializer.parameter.field">field</a></code> | <code>string[]</code> | *No description.* |

---

##### `field`<sup>Required</sup> <a name="field" id="construct-hub.TagConditionField.Initializer.parameter.field"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.TagConditionField.eq">eq</a></code> | Create a === condition which applies if the specified field within the package's package.json is equal to the passed value. |
| <code><a href="#construct-hub.TagConditionField.includes">includes</a></code> | Create a `field.includes(value)` condition which applies if the specified field within the package's package.json includes the value. This works for arrays or strings. |
| <code><a href="#construct-hub.TagConditionField.startsWith">startsWith</a></code> | Create a `field.startsWith(value)` condition which applies if the specified field within the package's package.json begins with the value. This works only for string values. |

---

##### `eq` <a name="eq" id="construct-hub.TagConditionField.eq"></a>

```typescript
public eq(value: any): TagCondition
```

Create a === condition which applies if the specified field within the package's package.json is equal to the passed value.

###### `value`<sup>Required</sup> <a name="value" id="construct-hub.TagConditionField.eq.parameter.value"></a>

- *Type:* any

---

##### `includes` <a name="includes" id="construct-hub.TagConditionField.includes"></a>

```typescript
public includes(value: any, options?: TagConditionIncludesOptions): TagCondition
```

Create a `field.includes(value)` condition which applies if the specified field within the package's package.json includes the value. This works for arrays or strings.

###### `value`<sup>Required</sup> <a name="value" id="construct-hub.TagConditionField.includes.parameter.value"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="construct-hub.TagConditionField.includes.parameter.options"></a>

- *Type:* <a href="#construct-hub.TagConditionIncludesOptions">TagConditionIncludesOptions</a>

---

##### `startsWith` <a name="startsWith" id="construct-hub.TagConditionField.startsWith"></a>

```typescript
public startsWith(value: string): TagCondition
```

Create a `field.startsWith(value)` condition which applies if the specified field within the package's package.json begins with the value. This works only for string values.

###### `value`<sup>Required</sup> <a name="value" id="construct-hub.TagConditionField.startsWith.parameter.value"></a>

- *Type:* string

---




### TagConditionReadme <a name="TagConditionReadme" id="construct-hub.TagConditionReadme"></a>

Target the README of the package to dictate whether a tag is relevant.

#### Initializers <a name="Initializers" id="construct-hub.TagConditionReadme.Initializer"></a>

```typescript
import { TagConditionReadme } from 'construct-hub'

new TagConditionReadme()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.TagConditionReadme.includes">includes</a></code> | Create a `readme.includes(value)` condition which applies if the README includes the specified string. |

---

##### `includes` <a name="includes" id="construct-hub.TagConditionReadme.includes"></a>

```typescript
public includes(value: string, options?: TagConditionIncludesOptions): TagCondition
```

Create a `readme.includes(value)` condition which applies if the README includes the specified string.

###### `value`<sup>Required</sup> <a name="value" id="construct-hub.TagConditionReadme.includes.parameter.value"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="construct-hub.TagConditionReadme.includes.parameter.options"></a>

- *Type:* <a href="#construct-hub.TagConditionIncludesOptions">TagConditionIncludesOptions</a>

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IDenyList <a name="IDenyList" id="construct-hub.IDenyList"></a>

- *Implemented By:* <a href="#construct-hub.IDenyList">IDenyList</a>

DenyList features exposed to extension points.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.IDenyList.grantRead">grantRead</a></code> | Grants an AWS Lambda function permissions to read the deny list, and adds the relevant environment variables expected by the `DenyListClient`. |

---

##### `grantRead` <a name="grantRead" id="construct-hub.IDenyList.grantRead"></a>

```typescript
public grantRead(handler: Function): void
```

Grants an AWS Lambda function permissions to read the deny list, and adds the relevant environment variables expected by the `DenyListClient`.

###### `handler`<sup>Required</sup> <a name="handler" id="construct-hub.IDenyList.grantRead.parameter.handler"></a>

- *Type:* @aws-cdk/aws-lambda.Function

---


### ILicenseList <a name="ILicenseList" id="construct-hub.ILicenseList"></a>

- *Implemented By:* <a href="#construct-hub.ILicenseList">ILicenseList</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.ILicenseList.grantRead">grantRead</a></code> | Grants an AWS Lambda function permissions to read the license allow list, and adds the relevant environment variables expected by the `LicenseListClient`. |

---

##### `grantRead` <a name="grantRead" id="construct-hub.ILicenseList.grantRead"></a>

```typescript
public grantRead(handler: Function): void
```

Grants an AWS Lambda function permissions to read the license allow list, and adds the relevant environment variables expected by the `LicenseListClient`.

###### `handler`<sup>Required</sup> <a name="handler" id="construct-hub.ILicenseList.grantRead.parameter.handler"></a>

- *Type:* @aws-cdk/aws-lambda.Function

---


### IMonitoring <a name="IMonitoring" id="construct-hub.IMonitoring"></a>

- *Implemented By:* <a href="#construct-hub.IMonitoring">IMonitoring</a>

ConstructHub monitoring features exposed to extension points.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.IMonitoring.addHighSeverityAlarm">addHighSeverityAlarm</a></code> | Adds a high-severity alarm. |
| <code><a href="#construct-hub.IMonitoring.addLowSeverityAlarm">addLowSeverityAlarm</a></code> | Adds a low-severity alarm. |

---

##### `addHighSeverityAlarm` <a name="addHighSeverityAlarm" id="construct-hub.IMonitoring.addHighSeverityAlarm"></a>

```typescript
public addHighSeverityAlarm(title: string, alarm: Alarm): void
```

Adds a high-severity alarm.

If this alarm goes off, the action specified in `highSeverityAlarmActionArn` is triggered.

###### `title`<sup>Required</sup> <a name="title" id="construct-hub.IMonitoring.addHighSeverityAlarm.parameter.title"></a>

- *Type:* string

a user-friendly title for the alarm (will be rendered on the high-severity CloudWatch dashboard).

---

###### `alarm`<sup>Required</sup> <a name="alarm" id="construct-hub.IMonitoring.addHighSeverityAlarm.parameter.alarm"></a>

- *Type:* @aws-cdk/aws-cloudwatch.Alarm

the alarm to be added to the high-severity dashboard.

---

##### `addLowSeverityAlarm` <a name="addLowSeverityAlarm" id="construct-hub.IMonitoring.addLowSeverityAlarm"></a>

```typescript
public addLowSeverityAlarm(title: string, alarm: Alarm): void
```

Adds a low-severity alarm.

If this alarm goes off, the action specified in `normalAlarmAction` is triggered.

###### `title`<sup>Required</sup> <a name="title" id="construct-hub.IMonitoring.addLowSeverityAlarm.parameter.title"></a>

- *Type:* string

a user-friendly title for the alarm (not currently used).

---

###### `alarm`<sup>Required</sup> <a name="alarm" id="construct-hub.IMonitoring.addLowSeverityAlarm.parameter.alarm"></a>

- *Type:* @aws-cdk/aws-cloudwatch.Alarm

the alarm to be added.

---


### IPackageSource <a name="IPackageSource" id="construct-hub.IPackageSource"></a>

- *Implemented By:* construct-hub.sources.CodeArtifact, construct-hub.sources.NpmJs, <a href="#construct-hub.IPackageSource">IPackageSource</a>

A package source for ConstructHub.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.IPackageSource.bind">bind</a></code> | Binds the package source to a scope and target queue. |

---

##### `bind` <a name="bind" id="construct-hub.IPackageSource.bind"></a>

```typescript
public bind(scope: Construct, opts: PackageSourceBindOptions): PackageSourceBindResult
```

Binds the package source to a scope and target queue.

###### `scope`<sup>Required</sup> <a name="scope" id="construct-hub.IPackageSource.bind.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

the construct scope in which the binding happens.

---

###### `opts`<sup>Required</sup> <a name="opts" id="construct-hub.IPackageSource.bind.parameter.opts"></a>

- *Type:* <a href="#construct-hub.PackageSourceBindOptions">PackageSourceBindOptions</a>

options for binding the package source.

---


### IRepository <a name="IRepository" id="construct-hub.IRepository"></a>

- *Implemented By:* <a href="#construct-hub.IRepository">IRepository</a>

The CodeArtifact repository API exposed to extensions.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.IRepository.addExternalConnection">addExternalConnection</a></code> | Adds an external connection to this repository. |

---

##### `addExternalConnection` <a name="addExternalConnection" id="construct-hub.IRepository.addExternalConnection"></a>

```typescript
public addExternalConnection(id: string): void
```

Adds an external connection to this repository.

###### `id`<sup>Required</sup> <a name="id" id="construct-hub.IRepository.addExternalConnection.parameter.id"></a>

- *Type:* string

the id of the external connection (i.e: `public:npmjs`).

---


## Enums <a name="Enums" id="Enums"></a>

### Isolation <a name="Isolation" id="construct-hub.Isolation"></a>

How possibly risky operations (such as doc-generation, which requires installing the indexed packages in order to trans-literate sample code) are isolated to mitigate possible arbitrary code execution vulnerabilities in and around `npm install` or the transliterator's use of the TypeScript compiler.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.Isolation.UNLIMITED_INTERNET_ACCESS">UNLIMITED_INTERNET_ACCESS</a></code> | No isolation is done whatsoever. The doc-generation process still is provisioned with least-privilege permissions, but retains complete access to internet. |
| <code><a href="#construct-hub.Isolation.LIMITED_INTERNET_ACCESS">LIMITED_INTERNET_ACCESS</a></code> | The same protections as `UNLIMITED_INTERNET_ACCESS`, except outbound internet connections are limited to IP address ranges corresponding to hosting endpoints for npmjs.com. |
| <code><a href="#construct-hub.Isolation.NO_INTERNET_ACCESS">NO_INTERNET_ACCESS</a></code> | The same protections as `LIMITED_INTERNET_ACCESS`, except all remaining internet access is removed. |

---

##### `UNLIMITED_INTERNET_ACCESS` <a name="UNLIMITED_INTERNET_ACCESS" id="construct-hub.Isolation.UNLIMITED_INTERNET_ACCESS"></a>

No isolation is done whatsoever. The doc-generation process still is provisioned with least-privilege permissions, but retains complete access to internet.

While this maximizes the chances of successfully installing packages (and hence successfully generating documentation for those), it is also the least secure mode of operation.  We advise you only consider using this isolation mode if you are hosting a ConstructHub instance that only indexes trusted packages (including transitive dependencies).

---


##### `LIMITED_INTERNET_ACCESS` <a name="LIMITED_INTERNET_ACCESS" id="construct-hub.Isolation.LIMITED_INTERNET_ACCESS"></a>

The same protections as `UNLIMITED_INTERNET_ACCESS`, except outbound internet connections are limited to IP address ranges corresponding to hosting endpoints for npmjs.com.

---


##### `NO_INTERNET_ACCESS` <a name="NO_INTERNET_ACCESS" id="construct-hub.Isolation.NO_INTERNET_ACCESS"></a>

The same protections as `LIMITED_INTERNET_ACCESS`, except all remaining internet access is removed.

All traffic to AWS service endpoints is routed through VPC Endpoints, as the compute nodes are jailed in a completely isolated VPC.  This is the most secure (and recommended) mode of operation for ConstructHub instances.

---


### TagConditionLogicType <a name="TagConditionLogicType" id="construct-hub.TagConditionLogicType"></a>

Logic operators for performing specific conditional logic.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.TagConditionLogicType.AND">AND</a></code> | *No description.* |
| <code><a href="#construct-hub.TagConditionLogicType.OR">OR</a></code> | *No description.* |
| <code><a href="#construct-hub.TagConditionLogicType.NOT">NOT</a></code> | *No description.* |
| <code><a href="#construct-hub.TagConditionLogicType.EQUALS">EQUALS</a></code> | *No description.* |
| <code><a href="#construct-hub.TagConditionLogicType.INCLUDES">INCLUDES</a></code> | *No description.* |
| <code><a href="#construct-hub.TagConditionLogicType.STARTS_WITH">STARTS_WITH</a></code> | *No description.* |

---

##### `AND` <a name="AND" id="construct-hub.TagConditionLogicType.AND"></a>

---


##### `OR` <a name="OR" id="construct-hub.TagConditionLogicType.OR"></a>

---


##### `NOT` <a name="NOT" id="construct-hub.TagConditionLogicType.NOT"></a>

---


##### `EQUALS` <a name="EQUALS" id="construct-hub.TagConditionLogicType.EQUALS"></a>

---


##### `INCLUDES` <a name="INCLUDES" id="construct-hub.TagConditionLogicType.INCLUDES"></a>

---


##### `STARTS_WITH` <a name="STARTS_WITH" id="construct-hub.TagConditionLogicType.STARTS_WITH"></a>

---


### TagConditionSource <a name="TagConditionSource" id="construct-hub.TagConditionSource"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#construct-hub.TagConditionSource.PACKAGE_JSON">PACKAGE_JSON</a></code> | *No description.* |
| <code><a href="#construct-hub.TagConditionSource.README">README</a></code> | *No description.* |

---

##### `PACKAGE_JSON` <a name="PACKAGE_JSON" id="construct-hub.TagConditionSource.PACKAGE_JSON"></a>

---


##### `README` <a name="README" id="construct-hub.TagConditionSource.README"></a>

---

