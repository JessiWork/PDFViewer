import * as React from 'react';
import { Log, FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';

//import styles from './PdfViewer.module.scss';

export interface IPdfViewerProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}

const LOG_SOURCE: string = 'PdfViewer';

export default class PdfViewer extends React.Component<IPdfViewerProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: PdfViewer mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: PdfViewer unmounted');
  }

  public render(): React.ReactElement<{}> {
    return <div/>;
  }
}
