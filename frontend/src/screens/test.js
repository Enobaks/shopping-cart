<select value={qty} onChange={(e) => setQty(e.target.value)}>
{[...Array(product.countInStock).keys()].map((x) => {
  return (
    <option key={x + 1} value={x + 1}>
      {x + 1}
    </option>
  );
})}
</select>