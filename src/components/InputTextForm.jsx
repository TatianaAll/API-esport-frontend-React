function InputForm({ nameInput, labelName, onChange }) {
  return (
    <div className="flex flex-col py-1">
      <label htmlFor={`${nameInput}`} className="text-chocolate text-xl capitalize">
        {labelName}
      </label>
      <input
        type="text"
        name={`${nameInput}`}
        id={`${nameInput}`}
        onChange={onChange}
        className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
      />
    </div>
  );
}

export default InputForm;
