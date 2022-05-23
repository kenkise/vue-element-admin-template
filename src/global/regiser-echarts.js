import * as echarts from 'echarts/core';
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { GridComponent } from 'echarts/components';
import { BarChart, GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

export function regisetEcharts(vue) {
  vue.prototype.$echarts = echarts;
  echarts.use([
    GridComponent,
    BarChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout,
    GaugeChart,
  ]);
}
