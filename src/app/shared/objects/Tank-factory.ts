import { Bottom } from './bottom';
import { ConnectorTank } from './connectorTank';
import { Customer } from './customer';
import { Tank } from './tank';

export class TankFactory {

  static empty(): Tank {
    return new Tank(0, '', 0, 0, 0, 0, false, new Bottom(0, '', '', 0, 0, 0, 0, 0, 0.0), [new ConnectorTank(0, 0, 0, 0)], new Customer(0, '', '', '', '', 0, '', ''), '', this.getActualDateAsString() );
  }

  // static items(): Tank[] {
  //   return [
  //     new Tank(
  //       'DE12345678',
  //       'Umwälzpumpe',
  //       200,
  //       25.3,
  //       77.9,
  //       '2019-02-01',
  //     ),
  //     new Tank(
  //       'IT123456',
  //       'Kupplung',
  //       100,
  //       5.3,
  //       7.9,
  //       '2019-02-02',
  //     )
  //   ];
  // }

  private static getActualDateAsString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    return year + '-' + (month < 10 ? '0' + month : month) + '-' +
      (day < 10 ? '0' + day : day);
  }
}
