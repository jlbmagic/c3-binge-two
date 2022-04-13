import c3 from "c3";

//version 1
function loadChartFn(data) {
  console.log(data);

  const columns = JSON.parse(data);
  console.log(columns);
  const options = {
    bindto: "#chart",
    axis: {
      x: {
        type: "category",
        categories: ["Blue", "Red", "Green", "Yellow", "Purple", "Brown"],
      },
    },
    data: {
      labels: true,
      type: "bar",
      colors: { Boys: "#AA45FF", Girls: "#639C13" },
      columns: columns,
    },
  };
  const piechartOptions = {
    bindto: "#piechart",
    pie: {
      expand: false,
      padAngle: 0.4,
      label: {
        threshold: 0.4,
      },
    },
    data: {
      type: "pie",
      colors: { Apples: "#005E54", Peaches: "#E1523D" },
      columns: [
        ["Apples", 2330, 200, 100, 400, 150, 250],
        ["Peaches", 550, 120, 110, 140, 215, 325],
      ],
    },
  };
  const chart = c3.generate(options);
  // const piechart = c3.generate(piechartOptions);
}
window.loadChart = loadChartFn;
