function Button({ text, onClick, disabled }) {
  if (disabled) {
    return (
      <button
        className="text-stone-50 rounded-xl bg-stone-900 font-sans_Regular font-semibold h-10 w-60 p-1 border-1 hover:border-stone-800 hover:border-2"
        onClick={onClick}
        disabled={true}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      className="rounded-xl bg-stone-100 font-sans_Regular font-semibold h-10 w-60 p-1 border-1 hover:border-stone-800 hover:border-2"
      onClick={onClick}
      disabled={false} // Add disabled prop here
    >
      {text}
    </button>
  );
}

export default Button;
