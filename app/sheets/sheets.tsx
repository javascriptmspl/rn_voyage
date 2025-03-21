import {registerSheet} from 'react-native-actions-sheet';

import CameraAndGalleryOption from './CameraAndGalleryOption';
import GenderSelectSheet from './GenderSelectSheet';
import PremiumMembershipSheet from './PremiumMemershiupSheet';
import ItemCustomiseSheet from './ItemCustomiseSheet';
import DestinationBookingSheet from './DestinationBookingSheet';
import FlightBookingSheet from './FlightBookingSheet';

export const SHEETS = {
  CameraAndGalleryOption: 'CameraAndGalleryOption',
  GenderSelectSheet: 'GenderSelectSheet',
  ItemCustomiseSheet: 'ItemCustomiseSheet',
  PremiumMembershipSheet: 'PremiumMembershipSheet',
  DestinationBookingSheet: 'DestinationBookingSheet',
  FlightBookingSheet: 'FlightBookingSheet',
};

registerSheet(SHEETS.CameraAndGalleryOption, CameraAndGalleryOption);
registerSheet(SHEETS.GenderSelectSheet, GenderSelectSheet);
registerSheet(SHEETS.ItemCustomiseSheet, ItemCustomiseSheet);
registerSheet(SHEETS.PremiumMembershipSheet, PremiumMembershipSheet);
registerSheet(SHEETS.DestinationBookingSheet, DestinationBookingSheet);
registerSheet(SHEETS.FlightBookingSheet, FlightBookingSheet);
