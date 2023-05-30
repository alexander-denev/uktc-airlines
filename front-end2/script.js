                    // Templates
tSvgPolygon = () => document.createElementNS("http://www.w3.org/2000/svg", "polygon");
tSvg = () => document.createElementNS("http://www.w3.org/2000/svg", "svg");
tSvgText = () => document.createElementNS('http://www.w3.org/2000/svg', 'text');

                    // Fetch
const data = {
    "seats": [
        {
            "type": "First",
            "color": "rgb(232, 170, 0)",
            "visualisation": `
                <svg width="50" height="50" viewBox="42.681 87.361 426.637 424.639" xmlns="http://www.w3.org/2000/svg">
                <path stroke="red" stroke-width="0" d="M69.126 371.332c2.499-1.788 336.79-2.174 340.837-1.489 76.31 12.913 26.748 86.189-13.395 109.842-17.252 10.165-243.663 5.451-301.545-2.68-28.913-4.062-52.705-86.489-25.897-105.673Z" style="stroke: rgb(129, 151, 57); stroke-width: 2px; fill: rgb(183, 134, 0);"/>
                <path id="color_identifier" stroke="red" stroke-width="0" d="M153.665 132.597c21.437-29.658 195.59-20.793 202.122-3.275 81.705 219.108 44.878 202.849 25.599 258.381-7.626 21.967-237.817 3.908-244.688 3.573-49.143-2.393 5.299-242.537 16.967-258.679Z" style="stroke:#819739;stroke-width:2px;fill: rgb(232, 170, 0)"/>
                <path d="M432.613 348.736a74.883 74.883 0 0 0-11.492-3.981c1.68-7.537 3.097-15.447 4.276-23.675 2.091-14.558 1.532-29.479-1.576-44.059l-26.646-124.91c-35.806-97.539-269.464-73.96-282.057-1.345L88.12 277.014c-3.109 14.586-3.668 29.508-1.576 44.073 1.179 8.232 2.597 16.146 4.278 23.686a74.976 74.976 0 0 0-11.41 3.96c-22.543 9.934-36.731 30.48-36.731 60.325.683 14.501 5.085 33.088 16.639 51.945 19.423 31.701 52.814 50.92 100.452 50.985.077.001.152.012.23.012h192c.056 0 .109-.008.165-.008 47.675-.042 81.092-19.266 100.529-50.985 11.555-18.856 15.961-37.441 16.622-50.9.026-30.891-14.161-51.437-36.705-61.371Zm-302.765-62.821 26.665-124.9c3.386-11.834 18.426-21.817 43.274-27.72 10.376-2.465 21.666-4.008 33.2-4.769 4.929-.325 9.502-.485 13.577-.526h3.889c1.062.01 2.095.025 3.064.051 1.298.041 1.298.041 1.399.047 2.208-.006 2.208-.006 3.506-.047.969-.026 2.003-.041 3.064-.051h3.886c4.077.041 8.653.201 13.584.526 11.537.761 22.83 2.305 33.208 4.771 24.848 5.905 39.893 15.889 43.617 29.066l26.311 123.556c2.07 9.712 2.439 19.571 1.07 29.103-5.363 37.44-17.238 63.667-32.217 68.25-.151.041-.299.092-.451.129-.039.011-.079.018-.118.029a17.07 17.07 0 0 1-1.197.228c-6.045-2.153-14.371-4.742-24.541-7.304-22.151-5.581-45.354-8.935-68.668-8.935-23.304 0-46.505 3.354-68.659 8.934-10.029 2.526-18.255 5.076-24.28 7.211l-.275.096c-.38-.062-.759-.129-1.132-.216-.054-.014-.109-.025-.164-.04-.163-.04-.322-.094-.484-.139-14.971-4.599-26.838-30.818-32.199-68.237-1.369-9.54-.999-19.4 1.071-29.113ZM95.702 438.713c-4.196-6.849-7.092-14.33-8.867-21.821-1.036-4.373-1.448-7.558-1.512-8.876.025-11.431 3.838-16.953 11.295-20.239 1.817-.801 3.734-1.405 5.62-1.84 3.782 5.992 8.006 11.337 12.687 15.987 6.633 8.433 14.486 14.948 23.744 19.173v46.323c-20.404-3.987-33.998-14.067-42.967-28.707Zm85.646 30.62v-46.897l.054-.018c1.149-.374 2.332-.748 3.544-1.121l.32-.099c1.215-.372 2.46-.743 3.735-1.111l.275-.079a262.669 262.669 0 0 1 8.447-2.276c18.976-4.779 38.786-7.642 58.256-7.642 19.461 0 39.264 2.862 58.237 7.642a257.49 257.49 0 0 1 12.621 3.516l.062.019c1.29.396 2.545.794 3.764 1.191l.004.001v46.873H181.348v.001Zm243.841-52.443c-1.776 7.492-4.674 14.974-8.871 21.824-8.973 14.642-22.569 24.724-42.973 28.71v-46.36c9.028-4.135 16.716-10.453 23.24-18.602 4.89-4.767 9.285-10.289 13.21-16.52 1.884.435 3.798 1.039 5.614 1.839 7.457 3.286 11.269 8.808 11.269 21.281-.04.268-.453 3.455-1.489 7.828Z"/>
                </svg>`,
            "occurrences": [
                {"x": 15, "y": 25, "row": "A", "column": 1, "floor" : 1},
                {"x": 35, "y": 45, "row": "A", "column": 2, "floor" : 1},
                {"x": 55, "y": 65, "row": "B", "column": 1, "floor" : 1},
                {"x": 75, "y": 85, "row": "B", "column": 2, "floor" : 1},
                {"x": 95, "y": 105, "row": "C", "column": 1, "floor" : 1}
            ]
        },
        {
            "type": "Economy",
            "color": "rgb(36, 195, 0)",
            "visualisation": `
                <svg width="50" height="50" viewBox="42.681 87.361 426.637 424.639" xmlns="http://www.w3.org/2000/svg">
                <path stroke="red" stroke-width="0" d="M69.126 371.332c2.499-1.788 336.79-2.174 340.837-1.489 76.31 12.913 26.748 86.189-13.395 109.842-17.252 10.165-243.663 5.451-301.545-2.68-28.913-4.062-52.705-86.489-25.897-105.673Z" style="stroke: rgb(129, 151, 57); stroke-width: 2px; fill: rgb(29, 159, 0);"/>
                <path id="color_identifier" stroke="red" stroke-width="0" d="M153.665 132.597c21.437-29.658 195.59-20.793 202.122-3.275 81.705 219.108 44.878 202.849 25.599 258.381-7.626 21.967-237.817 3.908-244.688 3.573-49.143-2.393 5.299-242.537 16.967-258.679Z" style="stroke:#819739;stroke-width:2px;fill: rgb(36, 195, 0)"/>
                <path d="M432.613 348.736a74.883 74.883 0 0 0-11.492-3.981c1.68-7.537 3.097-15.447 4.276-23.675 2.091-14.558 1.532-29.479-1.576-44.059l-26.646-124.91c-35.806-97.539-269.464-73.96-282.057-1.345L88.12 277.014c-3.109 14.586-3.668 29.508-1.576 44.073 1.179 8.232 2.597 16.146 4.278 23.686a74.976 74.976 0 0 0-11.41 3.96c-22.543 9.934-36.731 30.48-36.731 60.325.683 14.501 5.085 33.088 16.639 51.945 19.423 31.701 52.814 50.92 100.452 50.985.077.001.152.012.23.012h192c.056 0 .109-.008.165-.008 47.675-.042 81.092-19.266 100.529-50.985 11.555-18.856 15.961-37.441 16.622-50.9.026-30.891-14.161-51.437-36.705-61.371Zm-302.765-62.821 26.665-124.9c3.386-11.834 18.426-21.817 43.274-27.72 10.376-2.465 21.666-4.008 33.2-4.769 4.929-.325 9.502-.485 13.577-.526h3.889c1.062.01 2.095.025 3.064.051 1.298.041 1.298.041 1.399.047 2.208-.006 2.208-.006 3.506-.047.969-.026 2.003-.041 3.064-.051h3.886c4.077.041 8.653.201 13.584.526 11.537.761 22.83 2.305 33.208 4.771 24.848 5.905 39.893 15.889 43.617 29.066l26.311 123.556c2.07 9.712 2.439 19.571 1.07 29.103-5.363 37.44-17.238 63.667-32.217 68.25-.151.041-.299.092-.451.129-.039.011-.079.018-.118.029a17.07 17.07 0 0 1-1.197.228c-6.045-2.153-14.371-4.742-24.541-7.304-22.151-5.581-45.354-8.935-68.668-8.935-23.304 0-46.505 3.354-68.659 8.934-10.029 2.526-18.255 5.076-24.28 7.211l-.275.096c-.38-.062-.759-.129-1.132-.216-.054-.014-.109-.025-.164-.04-.163-.04-.322-.094-.484-.139-14.971-4.599-26.838-30.818-32.199-68.237-1.369-9.54-.999-19.4 1.071-29.113ZM95.702 438.713c-4.196-6.849-7.092-14.33-8.867-21.821-1.036-4.373-1.448-7.558-1.512-8.876.025-11.431 3.838-16.953 11.295-20.239 1.817-.801 3.734-1.405 5.62-1.84 3.782 5.992 8.006 11.337 12.687 15.987 6.633 8.433 14.486 14.948 23.744 19.173v46.323c-20.404-3.987-33.998-14.067-42.967-28.707Zm85.646 30.62v-46.897l.054-.018c1.149-.374 2.332-.748 3.544-1.121l.32-.099c1.215-.372 2.46-.743 3.735-1.111l.275-.079a262.669 262.669 0 0 1 8.447-2.276c18.976-4.779 38.786-7.642 58.256-7.642 19.461 0 39.264 2.862 58.237 7.642a257.49 257.49 0 0 1 12.621 3.516l.062.019c1.29.396 2.545.794 3.764 1.191l.004.001v46.873H181.348v.001Zm243.841-52.443c-1.776 7.492-4.674 14.974-8.871 21.824-8.973 14.642-22.569 24.724-42.973 28.71v-46.36c9.028-4.135 16.716-10.453 23.24-18.602 4.89-4.767 9.285-10.289 13.21-16.52 1.884.435 3.798 1.039 5.614 1.839 7.457 3.286 11.269 8.808 11.269 21.281-.04.268-.453 3.455-1.489 7.828Z"/>
                </svg>`,
            "occurrences": [
                {"x": 75, "y": 85, "row": "D", "column": 1, "floor" : 1},
                {"x": 95, "y": 105, "row": "D", "column": 2, "floor" : 1},
                {"x": 115, "y": 125, "row": "E", "column": 1, "floor" : 1},
                {"x": 135, "y": 145, "row": "E", "column": 2, "floor" : 1},
                {"x": 155, "y": 165, "row": "F", "column": 1, "floor" : 1}
            ]
        },
        {
            "type": "Business",
            "color": "rgb(0, 81, 255)",
            "visualisation": `
                <svg width="50" height="50" viewBox="42.681 87.361 426.637 424.639" xmlns="http://www.w3.org/2000/svg">
                <path stroke="red" stroke-width="0" d="M69.126 371.332c2.499-1.788 336.79-2.174 340.837-1.489 76.31 12.913 26.748 86.189-13.395 109.842-17.252 10.165-243.663 5.451-301.545-2.68-28.913-4.062-52.705-86.489-25.897-105.673Z" style="stroke: rgb(129, 151, 57); stroke-width: 2px; fill: rgb(0, 66, 207);"/>
                <path id="color_identifier" stroke="red" stroke-width="0" d="M153.665 132.597c21.437-29.658 195.59-20.793 202.122-3.275 81.705 219.108 44.878 202.849 25.599 258.381-7.626 21.967-237.817 3.908-244.688 3.573-49.143-2.393 5.299-242.537 16.967-258.679Z" style="stroke: rgb(129, 151, 57); stroke-width: 2px; fill: rgb(0, 81, 255);"/>
                <path d="M432.613 348.736a74.883 74.883 0 0 0-11.492-3.981c1.68-7.537 3.097-15.447 4.276-23.675 2.091-14.558 1.532-29.479-1.576-44.059l-26.646-124.91c-35.806-97.539-269.464-73.96-282.057-1.345L88.12 277.014c-3.109 14.586-3.668 29.508-1.576 44.073 1.179 8.232 2.597 16.146 4.278 23.686a74.976 74.976 0 0 0-11.41 3.96c-22.543 9.934-36.731 30.48-36.731 60.325.683 14.501 5.085 33.088 16.639 51.945 19.423 31.701 52.814 50.92 100.452 50.985.077.001.152.012.23.012h192c.056 0 .109-.008.165-.008 47.675-.042 81.092-19.266 100.529-50.985 11.555-18.856 15.961-37.441 16.622-50.9.026-30.891-14.161-51.437-36.705-61.371Zm-302.765-62.821 26.665-124.9c3.386-11.834 18.426-21.817 43.274-27.72 10.376-2.465 21.666-4.008 33.2-4.769 4.929-.325 9.502-.485 13.577-.526h3.889c1.062.01 2.095.025 3.064.051 1.298.041 1.298.041 1.399.047 2.208-.006 2.208-.006 3.506-.047.969-.026 2.003-.041 3.064-.051h3.886c4.077.041 8.653.201 13.584.526 11.537.761 22.83 2.305 33.208 4.771 24.848 5.905 39.893 15.889 43.617 29.066l26.311 123.556c2.07 9.712 2.439 19.571 1.07 29.103-5.363 37.44-17.238 63.667-32.217 68.25-.151.041-.299.092-.451.129-.039.011-.079.018-.118.029a17.07 17.07 0 0 1-1.197.228c-6.045-2.153-14.371-4.742-24.541-7.304-22.151-5.581-45.354-8.935-68.668-8.935-23.304 0-46.505 3.354-68.659 8.934-10.029 2.526-18.255 5.076-24.28 7.211l-.275.096c-.38-.062-.759-.129-1.132-.216-.054-.014-.109-.025-.164-.04-.163-.04-.322-.094-.484-.139-14.971-4.599-26.838-30.818-32.199-68.237-1.369-9.54-.999-19.4 1.071-29.113ZM95.702 438.713c-4.196-6.849-7.092-14.33-8.867-21.821-1.036-4.373-1.448-7.558-1.512-8.876.025-11.431 3.838-16.953 11.295-20.239 1.817-.801 3.734-1.405 5.62-1.84 3.782 5.992 8.006 11.337 12.687 15.987 6.633 8.433 14.486 14.948 23.744 19.173v46.323c-20.404-3.987-33.998-14.067-42.967-28.707Zm85.646 30.62v-46.897l.054-.018c1.149-.374 2.332-.748 3.544-1.121l.32-.099c1.215-.372 2.46-.743 3.735-1.111l.275-.079a262.669 262.669 0 0 1 8.447-2.276c18.976-4.779 38.786-7.642 58.256-7.642 19.461 0 39.264 2.862 58.237 7.642a257.49 257.49 0 0 1 12.621 3.516l.062.019c1.29.396 2.545.794 3.764 1.191l.004.001v46.873H181.348v.001Zm243.841-52.443c-1.776 7.492-4.674 14.974-8.871 21.824-8.973 14.642-22.569 24.724-42.973 28.71v-46.36c9.028-4.135 16.716-10.453 23.24-18.602 4.89-4.767 9.285-10.289 13.21-16.52 1.884.435 3.798 1.039 5.614 1.839 7.457 3.286 11.269 8.808 11.269 21.281-.04.268-.453 3.455-1.489 7.828Z"/>
                </svg>`,
            "occurrences" : [
                {"x": 200, "y": 0, "row": "J", "column": 1, "floor" : 1}
            ]
        },
        {
            "type": "Premium Economy",
            "color": "rgb(0, 117, 0)",
            "visualisation": `
                <svg width="50" height="50" viewBox="42.681 87.361 426.637 424.639" xmlns="http://www.w3.org/2000/svg">
                <path stroke="red" stroke-width="0" d="M69.126 371.332c2.499-1.788 336.79-2.174 340.837-1.489 76.31 12.913 26.748 86.189-13.395 109.842-17.252 10.165-243.663 5.451-301.545-2.68-28.913-4.062-52.705-86.489-25.897-105.673Z" style="stroke: rgb(129, 151, 57); stroke-width: 2px; fill: rgb(0, 85, 0);"/>
                <path id="color_identifier" stroke="red" stroke-width="0" d="M153.665 132.597c21.437-29.658 195.59-20.793 202.122-3.275 81.705 219.108 44.878 202.849 25.599 258.381-7.626 21.967-237.817 3.908-244.688 3.573-49.143-2.393 5.299-242.537 16.967-258.679Z" style="stroke: rgb(129, 151, 57); stroke-width: 2px; fill: rgb(0, 117, 0);"/>
                <path d="M432.613 348.736a74.883 74.883 0 0 0-11.492-3.981c1.68-7.537 3.097-15.447 4.276-23.675 2.091-14.558 1.532-29.479-1.576-44.059l-26.646-124.91c-35.806-97.539-269.464-73.96-282.057-1.345L88.12 277.014c-3.109 14.586-3.668 29.508-1.576 44.073 1.179 8.232 2.597 16.146 4.278 23.686a74.976 74.976 0 0 0-11.41 3.96c-22.543 9.934-36.731 30.48-36.731 60.325.683 14.501 5.085 33.088 16.639 51.945 19.423 31.701 52.814 50.92 100.452 50.985.077.001.152.012.23.012h192c.056 0 .109-.008.165-.008 47.675-.042 81.092-19.266 100.529-50.985 11.555-18.856 15.961-37.441 16.622-50.9.026-30.891-14.161-51.437-36.705-61.371Zm-302.765-62.821 26.665-124.9c3.386-11.834 18.426-21.817 43.274-27.72 10.376-2.465 21.666-4.008 33.2-4.769 4.929-.325 9.502-.485 13.577-.526h3.889c1.062.01 2.095.025 3.064.051 1.298.041 1.298.041 1.399.047 2.208-.006 2.208-.006 3.506-.047.969-.026 2.003-.041 3.064-.051h3.886c4.077.041 8.653.201 13.584.526 11.537.761 22.83 2.305 33.208 4.771 24.848 5.905 39.893 15.889 43.617 29.066l26.311 123.556c2.07 9.712 2.439 19.571 1.07 29.103-5.363 37.44-17.238 63.667-32.217 68.25-.151.041-.299.092-.451.129-.039.011-.079.018-.118.029a17.07 17.07 0 0 1-1.197.228c-6.045-2.153-14.371-4.742-24.541-7.304-22.151-5.581-45.354-8.935-68.668-8.935-23.304 0-46.505 3.354-68.659 8.934-10.029 2.526-18.255 5.076-24.28 7.211l-.275.096c-.38-.062-.759-.129-1.132-.216-.054-.014-.109-.025-.164-.04-.163-.04-.322-.094-.484-.139-14.971-4.599-26.838-30.818-32.199-68.237-1.369-9.54-.999-19.4 1.071-29.113ZM95.702 438.713c-4.196-6.849-7.092-14.33-8.867-21.821-1.036-4.373-1.448-7.558-1.512-8.876.025-11.431 3.838-16.953 11.295-20.239 1.817-.801 3.734-1.405 5.62-1.84 3.782 5.992 8.006 11.337 12.687 15.987 6.633 8.433 14.486 14.948 23.744 19.173v46.323c-20.404-3.987-33.998-14.067-42.967-28.707Zm85.646 30.62v-46.897l.054-.018c1.149-.374 2.332-.748 3.544-1.121l.32-.099c1.215-.372 2.46-.743 3.735-1.111l.275-.079a262.669 262.669 0 0 1 8.447-2.276c18.976-4.779 38.786-7.642 58.256-7.642 19.461 0 39.264 2.862 58.237 7.642a257.49 257.49 0 0 1 12.621 3.516l.062.019c1.29.396 2.545.794 3.764 1.191l.004.001v46.873H181.348v.001Zm243.841-52.443c-1.776 7.492-4.674 14.974-8.871 21.824-8.973 14.642-22.569 24.724-42.973 28.71v-46.36c9.028-4.135 16.716-10.453 23.24-18.602 4.89-4.767 9.285-10.289 13.21-16.52 1.884.435 3.798 1.039 5.614 1.839 7.457 3.286 11.269 8.808 11.269 21.281-.04.268-.453 3.455-1.489 7.828Z"/>
                </svg>`,
            "occurrences" : [
                {"x": 0, "y": 150, "row": "A", "column": 8, "floor" : 1}
            ]
        }
    ],
    "facilities": [
        {
            "type": "Bathroom",
            "visualisation": "[an SVG]",
            "occurrences": [
                {"x": 215, "y": 235, "floor" : 1},
                {"x": 250, "y": 90, "floor" : 1}
            ]
        },
        {
            "type": "Galley",
            "visualisation": "[an SVG]",
            "occurrences": [
                {"x": 215, "y": 235, "floor" : 1},
                {"x": 250, "y": 90, "floor" : 1}
            ]
        }
    ],
    "airplane": {
        "name": "Airbus A320",
        "floors": 1,
        "visualisation": {
            "1": "an SVG",
            "2": "an SVG"
        }
    }
};
/*
fetch('http://localhost:8080/api/your-endpoint')
    .then(response => response.json())
    .then(data => JSON.parse(data))
    .catch(error => console.error('Error:', error));
*/

                    // On click
function seatClick(seat, seatSVG, clas) {
    let seatPopup = document.createElement('div');
    seatPopup.className = 'seatPopup';
    
    let titleText = document.createElement('h2');
    titleText.textContent = `Seat: ${seat['column']} ${seat['row']}`;

    let classText = document.createElement('h3');
    classText.textContent = clas['type'] + " Class";

    let closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.setAttribute('class', `clickable`);
    closeButton.addEventListener('click', () => {
        seatPopup.style.opacity = '0';
        setTimeout(() => {
            seatPopup.remove();
        }, getElementDelay(seatPopup));
    });
    
    seatPopup.appendChild(titleText);
    seatPopup.appendChild(closeButton);
    seatPopup.appendChild(classText);
    planeDiv.appendChild(seatPopup);

    let seatBoundingBox = seatSVG.getBoundingClientRect();
    let popupBoundingBox = seatPopup.getBoundingClientRect();
    seatPopup.style.left = ((seatBoundingBox.left + (seatBoundingBox.width / 2)) - (popupBoundingBox.width / 2)) + 'px';
    seatPopup.style.top = seatBoundingBox.bottom + 'px';

    setTimeout(() => {seatPopup.style.opacity = '1';}, 0);
    let popups = Array.from(document.getElementsByClassName('seatPopup'));
    if (popups.length > 1) {
        for (let i = 0; i < popups.length - 1; i++) {
            popups[i].style.opacity = '0';
    
            setTimeout(() => {
                if (document.body.contains(popups[i])) {
                    popups[i].remove();
                }
            }, getElementDelay(popups[i]));
        }   
    }
}

function getElementDelay(element) {
    let delay;
    let rawTransDur = window.getComputedStyle(element).getPropertyValue('transition-duration');
    if (rawTransDur.trim().split(/s|ms/)[1] === 'ms') {delay = parseInt(rawTransDur);} else {delay = parseFloat(rawTransDur) *1000;}
    return delay;
}

                    // Render
let parser = new DOMParser();

let legend = document.getElementById('legend');
data.seats.forEach(clas => {
    let className = document.createElement('div');
    className.innerHTML = "&nbsp" + clas.type;
    
    let colorbox = document.createElement('div');
    colorbox.style.backgroundColor = parser.parseFromString(clas['visualisation'], "image/svg+xml").documentElement.getElementById('color_identifier').style.fill; 
    colorbox.style.height = "1.2em";
    colorbox.style.width = "1em";

    legend.appendChild(colorbox);
    legend.appendChild(className);
});

let planeDiv = document.getElementById('planeDiv');
let planeSvg = tSvg();
planeSvg.setAttribute('class','planeSvg');
planeSvg.setAttribute("width",'0');
planeSvg.setAttribute("height",'0');

data['seats'].forEach(clas => {
    let htmlSeatClass = [
        'Economy','Business','First','Premium Economy'
    ].indexOf(clas['type']) +1;


    clas['occurrences'].forEach(seat => {
        let seatForPlacement = parser.parseFromString(clas['visualisation'], "image/svg+xml").documentElement;
        seatForPlacement.setAttribute('x', seat['x']);
        seatForPlacement.setAttribute('y', seat['y']);

        if (parseInt(seatForPlacement.getAttribute("x")) + parseInt(seatForPlacement.getAttribute("width")) > parseInt(planeSvg.getAttribute("width"))) {
            planeSvg.setAttribute("width", (parseInt(seatForPlacement.getAttribute("x")) + parseInt(seatForPlacement.getAttribute("width"))));
        }
        if (parseInt(seatForPlacement.getAttribute("y")) + parseInt(seatForPlacement.getAttribute("height")) > parseInt(planeSvg.getAttribute("height"))) {
            planeSvg.setAttribute("height", (parseInt(seatForPlacement.getAttribute("y")) + parseInt(seatForPlacement.getAttribute("height"))));
        }

        seatForPlacement.setAttribute('class', `seat clickable`);
        seatForPlacement.addEventListener('click', () => seatClick(seat, seatForPlacement, clas));
 
        let seatText = tSvgText();
        seatText.setAttribute("x", "60%");
        seatText.setAttribute("y", "60%");
        seatText.setAttribute("text-anchor", "middle");
        seatText.setAttribute("dominant-baseline", "middle");
        seatText.setAttribute("font-size", "100");
        seatText.innerHTML = `${seat['column']} ${seat['row']}`;

        seatForPlacement.appendChild(seatText);
        planeSvg.appendChild(seatForPlacement);
    });
});



planeDiv.appendChild(planeSvg);