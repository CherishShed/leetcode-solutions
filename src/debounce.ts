type F = (...args: string[]) => void;

function debounce(fn: F, t: number): F {
  let timer: number;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

const log = debounce(console.log, 2000);

log("Hello"); // cancelled
log("Helo"); // cancelled
log("Hy"); // Logged at t=100ms
