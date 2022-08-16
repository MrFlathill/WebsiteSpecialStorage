import { Customer } from './customer';
import { Bottom } from './bottom';
import { ConnectorTank } from './connectorTank';

export class Tank {
  constructor(
    public tid: number,
    public tname: String,
    public tvolume: number,
    public theight: number,
    public tdiameter: number,
    public ttotalHeight: number,
    public tinsulation: boolean,
    public tbottom: Bottom,
    public connectors: Array<ConnectorTank>,
    public tcustomer: Customer,
    public tdescription: String,
    public tcreated: String,
  ) { }
}
