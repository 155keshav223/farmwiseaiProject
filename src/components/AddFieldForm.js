
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addField } from "../actions/fieldActions";
import Dropdown from "./Dropdown";
import "./AddFieldForm.css";

const AddFieldForm = () => {
  const dispatch = useDispatch();
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [fieldTypeOptions, setFieldTypeOptions] = useState([]);
  const [formData, setFormData] = useState({
    fieldDisplayName: "",
    fieldDataType: "",
    fieldMaxLength: "",
    isMandatory: "",
    fieldData: "",
    dateRangeValidation: {
      minDate: "",
      maxDate: "",
    },
  });

  const handleDropdownChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    switch (selectedValue) {
      case "Student":
      case "Self-Employee":
      case "Business":
        setFieldTypeOptions(["Text Box", "Dropdown", "Date Picker"]);
        break;
      default:
        setFieldTypeOptions([]);
    }
  };

  const handleAddField = () => {
    const fieldData = {
      fieldName,
      fieldType,
      selectedOption,
      formData,
    };
    dispatch(addField(fieldData));
    setFieldName("");
    setFieldType("");
    setSelectedOption("");
    setFormData({
      fieldDisplayName: "",
      fieldDataType: "",
      fieldMaxLength: "",
      isMandatory: "",
      fieldData: "",
      dateRangeValidation: {
        minDate: "",
        maxDate: "",
      },
    });
  };

  return (
    <div className="add-field-form">
      <Dropdown
        options={["Student", "Self-Employee", "Business"]}
        onSelect={handleDropdownChange}
      /><br></br>

      {fieldTypeOptions.length > 0 && (
        <div>
          <label>Select Field Type:</label><br></br>
          <select
            value={fieldType}
            onChange={(e) => setFieldType(e.target.value)}
          >
            <option value="">Select...</option>
            {fieldTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select><br></br><br></br>
          {fieldType === "Date Picker" && (
            <>
              <label>Field Display Name:</label>
              <input
                type="text"
                value={formData.fieldDisplayName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldDisplayName: e.target.value,
                  })
                }
              /><br></br><br></br>
              <label>Field Data Type:</label>
              <select
                value={formData.fieldDataType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldDataType: e.target.value,
                  })
                }
              >
                <option value="">Select...</option>
                <option value="date">Date</option>
              </select><br></br><br></br>
              <label>Date Range Validation:</label>
              <div>
                <label>Min Date:</label>
                <input
                  type="date"
                  value={formData.dateRangeValidation.minDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateRangeValidation: {
                        ...formData.dateRangeValidation,
                        minDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label>Max Date:</label>
                <input
                  type="date"
                  value={formData.dateRangeValidation.maxDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateRangeValidation: {
                        ...formData.dateRangeValidation,
                        maxDate: e.target.value,
                      },
                    })
                  }
                />
              </div><br></br><br></br>
              <label>Mandatory:</label>
              <select
                value={formData.isMandatory}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isMandatory: e.target.value,
                  })
                }
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select><br></br><br></br>
              <label>Field Data:</label>
              <input
                type="text"
                value={formData.fieldData}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldData: e.target.value,
                  })
                }
              />
            </>
          )}
          {fieldType === "Text Box" && (
            <>
              <label>Field Display Name:</label>
              <input
                type="text"
                value={formData.fieldDisplayName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldDisplayName: e.target.value,
                  })
                }
              /><br></br><br></br>
              <label>Field Data Type:</label>
              <select
                value={formData.fieldDataType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldDataType: e.target.value,
                  })
                }
              >
                <option value="">Select...</option>
                <option value="int">Int</option>
                <option value="char">Char</option>
                <option value="single character">Single Character</option>
              </select><br></br><br></br>
              <label>Field Max Length Allowed:</label>
              <input
                type="text"
                value={formData.fieldMaxLength}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldMaxLength: e.target.value,
                  })
                }
              /><br></br><br></br>
              <label>Mandatory:</label>
              <select
                value={formData.isMandatory}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isMandatory: e.target.value,
                  })
                }
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select><br></br><br></br>
              <label>Field Data:</label>
              <input
                type="text"
                value={formData.fieldData}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldData: e.target.value,
                  })
                }
              />
            </>
          )}
          {fieldType === "Dropdown" && (
            <>
              <label>Field Display Name:</label>
              <input
                type="text"
                value={formData.fieldDisplayName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldDisplayName: e.target.value,
                  })
                }
              /><br></br><br></br>
              <label>Field Data Type:</label>
              <select
                value={formData.fieldDataType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldDataType: e.target.value,
                  })
                }
              >
                <option value="">Select...</option>
                <option value="int">Int</option>
                <option value="char">Char</option>
                <option value="single character">Single Character</option>
              </select><br></br><br></br>
              <label>Mandatory:</label>
              <select
                value={formData.isMandatory}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isMandatory: e.target.value,
                  })
                }
              ><br></br><br></br>
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Field Data:</label>
              <textarea
                value={formData.fieldData}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fieldData: e.target.value,
                  })
                }
              />
            </>
          )}
        </div>
      )}
      <button onClick={handleAddField}>Confirm</button>
    </div>
  );
};

export default AddFieldForm;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addField } from "../actions/fieldActions";
// import Dropdown from "./Dropdown";

// const AddFieldForm = () => {
//   const dispatch = useDispatch();
//   const [fieldName, setFieldName] = useState("");
//   const [fieldType, setFieldType] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");
//   const [fieldTypeOptions, setFieldTypeOptions] = useState([]);
//   const [formData, setFormData] = useState({
//     fieldDisplayName: "",
//     fieldDataType: "",
//     fieldMaxLength: "",
//     isMandatory: "",
//     fieldData: "",
//     dateRangeValidation: {
//       minDate: "",
//       maxDate: "",
//     },
//   });
//   const handleDropdownChange = (selectedValue) => {
//     setSelectedOption(selectedValue);
//     switch (selectedValue) {
//       case "Student":
//         setFieldTypeOptions(["Text Box", "Dropdown", "Date Picker"]);
//         break;
//       case "Self-Employee":
//         setFieldTypeOptions(["Text Box", "Dropdown", "Date Picker"]);
//         break;
//       case "Business":
//         setFieldTypeOptions(["Text Box", "Dropdown", "Date Picker"]);
//         break;
//       default:
//         setFieldTypeOptions([]);
//     }
//   };

//   const handleAddField = () => {
//     const fieldData = {
//       fieldName,
//       fieldType,
//       selectedOption,
//       formData,
//     };
//     dispatch(addField(fieldData));
//     setFieldName("");
//     setFieldType("");
//     setSelectedOption("");
//     setFormData({
//       fieldDisplayName: "",
//       fieldDataType: "",
//       fieldMaxLength: "",
//       isMandatory: "",
//       fieldData: "",
//       dateRangeValidation: {
//         minDate: "",
//         maxDate: "",
//       },
//     });
//   };

//   return (
//     <div>
//       <Dropdown
//         options={["Student", "Self-Employee", "Business"]}
//         onSelect={handleDropdownChange}
//       />
//       {fieldTypeOptions.length > 0 && (
//         <div>
//           <label>Select Field Type:</label>
//           <select
//             value={fieldType}
//             onChange={(e) => setFieldType(e.target.value)}
//           >
//             <option value="">Select...</option>
//             {fieldTypeOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//           {fieldType === "Text Box" && (
//             <div>
//               <label>Field Display Name:</label>
//               <input
//                 type="text"
//                 value={formData.fieldDisplayName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldDisplayName: e.target.value })
//                 }
//               />
//               <label>Field Data Type:</label>
//               <select
//                 value={formData.fieldDataType}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldDataType: e.target.value })
//                 }
//               >
//                 <option value="">Select...</option>
//                 <option value="int">Int</option>
//                 <option value="char">Char</option>
//                 <option value="single character">Single Character</option>
//               </select>
//               <label>Field Max Length Allowed:</label>
//               <input
//                 type="text"
//                 value={formData.fieldMaxLength}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldMaxLength: e.target.value })
//                 }
//               />
//               <label>Mandatory:</label>
//               <select
//                 value={formData.isMandatory}
//                 onChange={(e) =>
//                   setFormData({ ...formData, isMandatory: e.target.value })
//                 }
//               >
//                 <option value="">Select...</option>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//               <label>Field Data:</label>
//               <input
//                 type="text"
//                 value={formData.fieldData}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldData: e.target.value })
//                 }
//               />
//             </div>
//           )}
//           {fieldType === "Date Picker" && (
//             <div>
//               <label>Field Display Name:</label>
//               <input
//                 type="text"
//                 value={formData.fieldDisplayName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldDisplayName: e.target.value })
//                 }
//               />
//               <label>Field Data Type:</label>
//               <select
//                 value={formData.fieldDataType}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldDataType: e.target.value })
//                 }
//               >
//                 <option value="">Select...</option>
//                 <option value="date">Date</option>
//               </select>
//               <label>Date Range Validation:</label>
//               <div>
//                 <label>Min Date:</label>
//                 <input
//                   type="date"
//                   value={formData.dateRangeValidation.minDate}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       dateRangeValidation: {
//                         ...formData.dateRangeValidation,
//                         minDate: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </div>
//               <div>
//                 <label>Max Date:</label>
//                 <input
//                   type="date"
//                   value={formData.dateRangeValidation.maxDate}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       dateRangeValidation: {
//                         ...formData.dateRangeValidation,
//                         maxDate: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </div>
//               <label>Mandatory:</label>
//               <select
//                 value={formData.isMandatory}
//                 onChange={(e) =>
//                   setFormData({ ...formData, isMandatory: e.target.value })
//                 }
//               >
//                 <option value="">Select...</option>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//               <label>Field Data:</label>
//               <input
//                 type="text"
//                 value={formData.fieldData}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldData: e.target.value })
//                 }
//               />
//             </div>
//           )}
//           {fieldType === "Dropdown" && (
//             <div>
//               <label>Field Display Name:</label>
//               <input
//                 type="text"
//                 value={formData.fieldDisplayName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldDisplayName: e.target.value })
//                 }
//               />
//               <label>Field Data Type:</label>
//               <select
//                 value={formData.fieldDataType}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldDataType: e.target.value })
//                 }
//               >
//                 <option value="">Select...</option>
//                 <option value="int">Int</option>
//                 <option value="char">Char</option>
//                 <option value="single character">Single Character</option>
//               </select>
//               <label>Field Validation:</label>
//               <p>null</p>
//               <label>Mandatory:</label>
//               <select
//                 value={formData.isMandatory}
//                 onChange={(e) =>
//                   setFormData({ ...formData, isMandatory: e.target.value })
//                 }
//               >
//                 <option value="">Select...</option>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//               <label>Field Data:</label>
//               <textarea
//                 value={formData.fieldData}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fieldData: e.target.value })
//                 }
//               />
//             </div>
//           )}
//         </div>
//       )}
//       <button onClick={handleAddField}>Add Field</button>
//     </div>
//   );
// };

// export default AddFieldForm;
