using my.bookshop as my from '../db/data-model';
// using { Country, managed } from '@sap/cds/common';

service CatalogService {
  entity Books @readonly as projection on my.Books;
  entity Authors @readonly as projection on my.Authors;
  entity LaunchComments as projection on my.LaunchComments;
}