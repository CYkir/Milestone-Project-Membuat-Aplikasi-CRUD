const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <>
      <div className="container p-4">
        <div className="row g-3">
          {products.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3">
              <div className="card shadow h-100">
                <img
                  src={p.image}
                  className="card-img-top p-3"
                  alt={p.title}
                  style={{ height: "250px", objectFit: "fill" }}
                />

                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-truncate">{p.title}</h6>

                  <p className="text-muted small">
                    {p.description?.slice(0, 30)}...
                  </p>

                  <div className="d-flex justify-content-between ">
                    <p className="fw-bold">${Number(p.price).toFixed(2)}</p>
                    <div>
                      <span class="badge  text-bg-success">{p.category}</span>
                    </div>
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <button
                      className="btn btn-warning btn-sm w-50"
                      onClick={() => onEdit(p)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm w-50"
                      onClick={() => onDelete(p.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
