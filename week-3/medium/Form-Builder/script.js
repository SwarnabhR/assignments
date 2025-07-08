document.getElementById("add-field-btn").addEventListener("click", function () {
    const label = document.getElementById("field-label").value.trim();
    const type = document.getElementById("field-type").value;
    const form = document.getElementById("form-preview");

    if (!label) {
        alert("Please enter a field label.");
        return;
    }

    // Create label
    const fieldLabel = document.createElement("label");
    fieldLabel.textContent = label;

    // Create input
    const input = document.createElement("input");
    input.type = type;
    input.name = label.toLowerCase().replace(/\s+/g, "_");

    // For checkbox or radio, show input and label inline
    const fieldWrapper = document.createElement("div");
    if (type === "checkbox" || type === "radio") {
        const inlineLabel = document.createElement("label");
        inlineLabel.appendChild(input);
        inlineLabel.append(` ${label}`);
        fieldWrapper.appendChild(inlineLabel);
  } else {
    fieldWrapper.appendChild(fieldLabel);
    fieldWrapper.appendChild(input);
  }

  form.appendChild(fieldWrapper);

  // Reset input
  document.getElementById("field-label").value = "";
});