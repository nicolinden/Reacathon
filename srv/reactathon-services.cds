using my.bookshop as my from '../db/data-model';
// using { Country, managed } from '@sap/cds/common';

service CatalogService {
  entity LaunchComments as projection on my.LaunchComments;
}