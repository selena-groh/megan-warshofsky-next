import "server-only";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vw",
      }}
    >
      <h2>Loading...</h2>
    </div>
  );
}
