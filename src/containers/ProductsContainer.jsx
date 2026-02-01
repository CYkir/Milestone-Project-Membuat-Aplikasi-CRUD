import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProducts,
} from "../api/productApi";
import ProductList from "../components/ProductList";
import ProductFormModal from "../components/ProductFormModal";
import Toast from "../components/Toast";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
    color : ""
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const showToast = (message, type = "success", ) => {
    setToast({ show: true, message, type});
    setTimeout(() => {
      setToast({ show: false, message: "", type });
    }, 3000);
  };

  const handleCreate = async (data) => {
    try {
      const res = await createProduct(data);

      console.log("response create:", res.data);

      setProducts([...products, res.data]);
      showToast("Produk berhasil ditambahkan");
      setShowModal(false);
    } catch (err) {
      console.error(err);
      showToast("Gagal menambahkan produk", "danger" );
    }
  };

  const handleUpdate = async (data) => {
    try {
      const res = await updateProduct(selectedProduct.id, data);

      console.log("response update:", res.data);

      setProducts(
        products.map((p) => (p.id === selectedProduct.id ? res.data : p)),
      );

      showToast("Produk berhasil diperbarui");
      setShowModal(false);
      setSelectedProduct(null);
    } catch (err) {
      console.error(err);
      showToast("Gagal update produk", "danger");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Yakin ingin menghapus produk ini?");
    if (!confirm) return;

    try {
      await deleteProducts(id);
      setProducts(products.filter((p) => p.id !== id));
      showToast("Produk berhasil dihapus ", "success" , "danger");
    } catch (err) {
      console.error(err);
      showToast("Gagal menghapus produk ", "danger");
    }
  };

  return (
    <>
      <div className="container p-4">
        <button
          className="btn btn-success"
          onClick={() => {
            setSelectedProduct(null);
            setShowModal(true);
          }}
        >
          Tambah Produk
        </button>
      </div>

      <ProductList
        products={products}
        onEdit={(product) => {
          setSelectedProduct(product);
          setShowModal(true);
        }}
        onDelete={handleDelete}
      />

      {showModal && (
        <ProductFormModal
          onClose={() => setShowModal(false)}
          onSubmit={selectedProduct ? handleUpdate : handleCreate}
          initialData={selectedProduct}
        />
      )}

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </>
  );
};

export default ProductsContainer;
