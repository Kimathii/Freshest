import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

/**
 * BarcodeDisplay
 * Renders a CODE128 barcode as an SVG via JsBarcode.
 * SVG-based rendering survives browser @media print where CSS
 * background-color bars are commonly suppressed.
 *
 * @param {string} value  - The barcode value to encode.
 * @param {number} [height=40]  - Bar height in pixels.
 * @param {number} [width=1.5]  - Width of the narrowest bar (module width).
 * @param {number} [margin=6]   - Quiet zone in pixels.
 */
const BarcodeDisplay = ({ value, height = 40, width = 1.5, margin = 6 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !value) return;

    try {
      JsBarcode(svgRef.current, value, {
        format: "CODE128",
        lineColor: "#000000",
        background: "#ffffff",
        height,
        width,
        margin,
        displayValue: false, // we render the human-readable label ourselves
        valid: (isValid) => {
          if (!isValid) {
            console.warn("[BarcodeDisplay] Invalid barcode value:", value);
          }
        },
      });
    } catch (err) {
      console.error("[BarcodeDisplay] JsBarcode error:", err);
    }
  }, [value, height, width, margin]);

  if (!value) return null;

  return (
    <div className="barcode-container">
      <svg ref={svgRef} className="barcode-svg" />
      <div className="barcode-label">{value}</div>
    </div>
  );
};

export default BarcodeDisplay;
