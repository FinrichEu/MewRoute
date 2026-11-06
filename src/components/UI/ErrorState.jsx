/* Display the error message that was received */
/* When “Retry” is clicked, call the received reload function */

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