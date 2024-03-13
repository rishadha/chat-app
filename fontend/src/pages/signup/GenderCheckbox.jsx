const GenderCheckbox = ({onCheckboxChange,selectdGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectdGender === "male" ? "selected":""}`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-900"  checked={selectdGender ==="male"} onChange={()=> onCheckboxChange("male")} />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer  ${selectdGender === "female" ? "selected":""}`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" 
          checked={selectdGender ==="female"} 
          onChange={()=> onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
