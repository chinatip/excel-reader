import { WorkSheet } from 'xlsx/types';
import { XlsxOpener } from './components/XlsxOpener';

export const App = (data: WorkSheet): JSX.Element => {
    return XlsxOpener(data);
};
