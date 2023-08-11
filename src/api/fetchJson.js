const fetchProducts = async () => {
  const response = await fetch("http://localhost:5000/produtos");
  const data = await response.json();
  return data;
};

export default fetchProducts;
