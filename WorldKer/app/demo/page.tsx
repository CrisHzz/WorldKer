
export default function Demo() {
  return (
    <main className="main">
      <div className="form-container">
        <h1>Solicitar una demo</h1>
        <form>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="input-email"
            required
          />
          <button type="submit" className="submit-btn">
            Obtener serial
          </button>
        </form>
      </div>
    </main>
  );
}
