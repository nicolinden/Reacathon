namespace my.bookshop;
using { managed } from '@sap/cds/common';

entity LaunchComments {
  key ID : UUID;
  launchId : String;
  comment : String;
}
