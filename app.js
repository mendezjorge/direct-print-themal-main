const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
function imprimir(data) {
  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: "//localhost/impresora",
  });

  printer.alignLeft();

  data.map(({align, print, println,newline }, item) => {
    if (align === "center") {
      printer.alignCenter();
    } else if (align === "left") {
      printer.alignLeft();
    } else if (align === "right") {
      printer.alignRight();
    }

    if (print !== undefined) {
      printer.print(print);
    }

    if (println !== undefined) {
      printer.println(println);
    }
  });

  printer.cut();

  try {
    let execute = printer.execute().then(() => {
      console.error("Print done!");
    });
  } catch (error) {
    console.log("Print failed:", error);
  }
}

module.exports = imprimir;
