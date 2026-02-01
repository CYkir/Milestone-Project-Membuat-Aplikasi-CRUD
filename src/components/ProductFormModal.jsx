import { useState } from "react";

const ProductFormModal = ({ onClose, onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [description, setDescription] = useState(
    initialData?.description || "",
  );
  const [image, setImage] = useState(
    initialData?.image || "",
  );
  const [category, setCategory] = useState(
    initialData?.category || "",
  );
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || price <= 0 || !description) {
      setError("Semua field wajib diisi dengan benar");
      return;
    }

    onSubmit({
      title,
      price,
      description,
      image,
      category,
    });
  };

  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">
                {initialData ? "Edit Produk" : "Tambah Produk"}
              </h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>

            <div className="modal-body">
              {error && <div className="alert alert-danger py-2">{error}</div>}

              <input
                className="form-control mb-2"
                placeholder="Nama Produk"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="number"
                className="form-control mb-2"
                placeholder="Harga"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <textarea
                className="form-control mb-2"
                placeholder="Deskripsi"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <input
                className="form-control mb-2"
                placeholder="URL Gambar"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />

              <input
                className="form-control mb-2"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={onClose}
              >
                Batal
              </button>
              <button className="btn btn-success" type="submit">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductFormModal;
