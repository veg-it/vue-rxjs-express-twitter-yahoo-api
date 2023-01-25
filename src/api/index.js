import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

export function chart() {
    ajax(
        `https://query1.finance.yahoo.com/v8/finance/chart/${this.saved_symbol}?metrics=close?&interval=1d&range=5d`
      )
        .pipe(
          map(
            (response) =>
              response.response.chart.result[0].indicators.quote[0].high
          )
        )
        .subscribe((data) => {
          this.chartData.datasets[0].data = data;
          this.loaded = true;
        });
}