/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as echarts from "echarts/core";
import { SunburstChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

/**
 * Write any other JavaScript below
 */

class Experiencia {
  data = [
    {
      name: "Frondend",
      children: [
        {
          name: "HTML",
          value: 2,
        },
        {
          name: "CSS",
          value: 2,
        },
        {
          name: "JavaScript",
          value: 2,
          children: [
            {
              name: "JQuery",
              value: 1,
            },
          ],
        },
        {
          name: "TypeScript",
          value: 2,
          children: [
            {
              name: "Angular",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Backend",
      children: [
        {
          name: "PHP",
          value: 3,
          children: [
            {
              name: "Laraven",
              value: 1,
            },
            {
              name: "CodeIgniter",
              value: 1,
            },
          ],
        },
        {
          name: "JAVA EE",
          value: 6,
          children: [
            {
              name: "JSP",
              value: 2,
            },
            {
              name: "Spring MVC",
              value: 2,
            },
            {
              name: "JSF",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Database",
      children: [
        {
          name: "Oracle",
          value: 1,
        },
        {
          name: "Postgres",
          value: 1,
        },
        {
          name: "MySQL",
          value: 1,
        },
      ],
    },
    {
      name: "Sistemas",
      children: [
        {
          name: "OS",
          children: [
            {
              name: "CentOS",
              value: 2,
            },
            {
              name: "Ubuntu",
              value: 1,
            },
          ],
        },
        {
          name: "Server",
          children: [
            {
              name: "Apache",
              value: 1,
            },
            {
              name: "JBoss",
              value: 2,
            },
            {
              name: "Tomcat",
              value: 1,
            },
            {
              name: "TomEE",
              value: 1,
            },
          ],
        },
      ],
    },
  ];
  option = {
    series: {
      type: "sunburst",
      data: this.data,
      radius: [0, "90%"],
      label: {
        rotate: "radial",
      },
    },
  };

  constructor() {
    echarts.use([SunburstChart, CanvasRenderer]);
    this.container = document.getElementById("chart");

    this.setContainerSize();

    this.myChart = echarts.init(this.container);
    this.option && this.myChart.setOption(this.option);
  }

  setContainerSize() {
    this.container.style.height = this.container.offsetWidth + "px";
  }

  resize() {
    this.setContainerSize();

    this.myChart.resize();
  }
}
+(function () {
  // Iniciamos la grafica
  const experiencia = new Experiencia();

  // Funcion per a modificar el tamany al redimensionar
  window.addEventListener(
    "resize",
    function (event) {
      setTimeout(function () {
        experiencia.resize();
      }, 1000);
    },
    true
  );
})();
