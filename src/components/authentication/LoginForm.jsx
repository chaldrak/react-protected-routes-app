import BaseInput from "../common/BaseInput";

function LoginForm({ email, password, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full w-full flex-col items-center justify-center space-y-7 px-20 text-white"
    >
      <h1 className="text-4xl">Sign In</h1>
      <BaseInput
        type="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={onChange}
      />
      <BaseInput
        type="password"
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={onChange}
      />
      <button className="h-14 w-full bg-[#ff0053] text-xl font-medium hover:bg-[#ff5555]">
        SUBMIT
      </button>
    </form>
  );
}

export default LoginForm;
