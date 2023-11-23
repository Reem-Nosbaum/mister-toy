function Button({ text, onClick, inCart }) {
  return (
    <button
      className={`rounded-xl font-sans_Regular font-semibold h-10 w-60 p-1 border-1 hover:border-stone-800 hover:border-2 ${
        inCart === "true"
          ? "text-stone-50 bg-stone-900 pointer-events-none "
          : "text-stone-900 bg-stone-100 "
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
