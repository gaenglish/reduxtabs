import { Tab } from '../../models/tab.model';

export interface Tabs {
  allTabs: Tab[],
  selectedTab: Tab,
  tabsLoaded: boolean
}
