namespace my.bookshop;
using { managed } from '@sap/cds/common';

entity Books {
  key ID : Integer;
  title  : localized String;
  author : Association to Authors;
  stock  : Integer;
}

entity Authors {
  key ID : Integer;
  name   : String;
  books  : Association to many Books on books.author = $self;
}

entity LaunchComments {
  key ID : UUID;
  launchId : String;
  comment : String;
}
