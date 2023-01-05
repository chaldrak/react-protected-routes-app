function BaseInput({ type, name, value, placeholder, error, onChange }) {
  return (
    <div className="h-14 w-full">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="h-full w-full border border-blue-300 px-4 text-xl text-black outline-none"
      />
    </div>
  );
}

export default BaseInput;
