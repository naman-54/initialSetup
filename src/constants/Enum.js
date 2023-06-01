import ScreenNames from './Screens';

export const HEADER_CONFIG = {
  HAS_MAIN_HEADER_SCREENS: [ScreenNames.homeScreen, ScreenNames.drawer],
  HAS_NO_HEADER_SCREENS: [],
  HAS_BACK_BUTTON_SCREENS: [],
};
export const headerType = {
  DEFAULT: 'DEFAULT', // title with back button
  DRAWER: 'DRAWER',
  LOGIN: 'LOGIN',
  TRANSPARENT_WITH_BACK: 'TRANSPARENT_WITH_BACK',
};
export const dashboardWidget = {
  editProfileCard: 'editProfileCard',
  reviewCard: 'reviewCard',
  feedbackCard: 'feedbackCard',
  myProfile: 'myProfile',
  myTeam: 'myTeam',
  myCalender: 'myCalender',
  pendingAction: 'pendingAction',
  upcomingHoliday: 'upcomingHoliday',
  leaderSpeak: 'leaderSpeak',
  bookmarkCard: 'bookmarkCard',
  companyDetailCard: 'companyDetailCard',
  moreAboutCard: 'moreAboutCard',
  aboutMeCard: 'aboutMeCard',
};

export const AppEnvironmentEnum = {
  UAT: 'uat',
  PRODUCTION: 'Production',
};

export const CommentTypeEnum = {
  USER: 'UserComment',
  RECIEVER: 'RecievedComment',
};
