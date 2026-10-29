export default function ErrorState({ message, onRetry }) {
  return (
    <div>
      <p>Error: {message}</p>

      <button type="button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}