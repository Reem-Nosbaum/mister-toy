function Button({ text }) {
  return (
    <button className="rounded-xl bg-stone-100 font-sans_Regular font-semibold h-10 w-60  p-1 border-1 hover:border-stone-800 hover:border-2 ">
      {text}
    </button>
  );
}

export default Button;
