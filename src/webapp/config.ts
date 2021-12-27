import { join } from 'path';
import { Category, FeaturedPackages, FeatureFlags, PackageLinkConfig } from '.';
import { ConfigFile } from '../config-file';
import { PackageTagConfig, TagGroupConfig } from '../package-tag';

type FrontendTagGroupConfig = TagGroupConfig;

interface FrontendPackageLinkConfig {
  linkLabel: string;
  configKey: string;
  linkText?: string;
}

interface FrontendPackageTagConfigBase {
  label: string;
  color?: string;
}

interface FrontendPackageTagHighlightConfig extends FrontendPackageTagConfigBase{
  icon?: string;
}

interface FrontendPackageTagSearchFilterConfig {
  display: string;
  groupBy: string;
}

interface FrontendPackageTagConfig {
  id: string;
  keyword?: FrontendPackageTagConfigBase;
  highlight?: FrontendPackageTagHighlightConfig;
  searchFilter?: FrontendPackageTagSearchFilterConfig;
}

type FrontendFeaturedPackagesConfig = FeaturedPackages;

interface FrontendDebugInfo {
  constructHubVersion: string;
  constructHubWebappVersion: string;
}

interface FrontendConfig {
  packageLinks?: FrontendPackageLinkConfig[];
  packageTags?: FrontendPackageTagConfig[];
  packageTagGroups?: FrontendTagGroupConfig[];
  featuredPackages?: FrontendFeaturedPackagesConfig;
  packageStats?: boolean;
  featureFlags?: FeatureFlags;
  categories?: Category[];
  debugInfo?: FrontendDebugInfo;
}

export interface WebappConfigProps {
  /**
   * Configuration for custom package page links.
   */
  readonly packageLinks?: PackageLinkConfig[];

  /**
   * Configuration for custom computed tags.
   */
  readonly packageTags?: PackageTagConfig[];

  /**
   * Configuration for grouping custom tags
   */
  readonly packageTagGroups?: FrontendTagGroupConfig[];

  /**
   * Configuration for packages to feature on the home page.
   * @default - Display the 10 most recently updated packages
   */
  readonly featuredPackages?: FeaturedPackages;

  /**
   * Configure feature flags for the web app.
   */
  readonly featureFlags?: FeatureFlags;

  /**
   * Whether to display package stats from `stats.json` on
   * package cards.
   * @default true
   */
  readonly showPackageStats?: boolean;

  /**
   * Browse categories. Each category will appear in the home page as a button
   * with a link to the relevant search query.
   */
  readonly categories?: Category[];
}

export class WebappConfig {
  public readonly file: ConfigFile;
  public constructor(private readonly props: WebappConfigProps) {
    this.file = new ConfigFile('config.json', JSON.stringify(this.frontendConfig));
  }

  private get frontendConfig(): FrontendConfig {
    return {
      packageLinks: this.packageLinks,
      packageTags: this.packageTags,
      packageTagGroups: this.props.packageTagGroups ?? [],
      featuredPackages: this.featuredPackages,
      packageStats: this.props.showPackageStats ?? true,
      featureFlags: this.props.featureFlags,
      categories: this.props.categories,
      debugInfo: this.debugInfo,
    };
  }


  private get packageLinks(): FrontendPackageLinkConfig[] {
    const packageLinks = this.props.packageLinks ?? [];
    // remove allowed domains from frontend config
    return packageLinks.map(({ allowedDomains, ...rest }) => rest);
  }

  private get packageTags(): FrontendPackageTagConfig[] {
    const packageTags = this.props.packageTags ?? [];
    // remove conditional logic from frontend config
    return packageTags.map(({ condition, ...rest }) => rest);
  }

  private get featuredPackages(): FrontendFeaturedPackagesConfig {
    const config = this.props.featuredPackages ?? {
      sections: [
        {
          name: 'Recently updated',
          showLastUpdated: 10,
        },
      ],
    };
    for (const section of config.sections) {
      if ((section.showPackages !== undefined && section.showLastUpdated !== undefined) ||
          (section.showPackages === undefined && section.showLastUpdated === undefined)) {
        throw new Error('Exactly one of \'showPackages\' and \'showPackages\' should be provided.');
      }
    }
    return config;
  }

  private get debugInfo(): FrontendDebugInfo {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const packageJson = require(join('..', '..', 'package.json'));
    return {
      constructHubVersion: packageJson.version,
      constructHubWebappVersion: packageJson.devDependencies['construct-hub-webapp'],
    };
  }
}
