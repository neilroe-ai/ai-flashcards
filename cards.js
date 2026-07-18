/* ============================================================
   FLASHCARD DECK
   ------------------------------------------------------------
   The daily lesson task appends new cards to the end of this
   array. Do not renumber existing ids — the app stores your
   right/wrong history against them, and changing an id resets
   that card's progress.

   Card shape:
     id    : unique string, "WW-TT-nn"  (week-topic-number)
     term  : the front of the card. Short. A keyword or question.
     back  : the answer. Keep it to one or two sentences.
     tag   : topic label, used for filtering
     week  : week number, used for filtering
   ============================================================ */

window.CARDS = [

  /* ---- Week 1, Topic 1 — Client/server, HTTP verbs, status codes ---- */

  { id: "01-01-01", week: 1, tag: "HTTP basics", term: "Client vs Server",
    back: "The client asks, the server answers. The server never initiates — it waits for a request." },

  { id: "01-01-02", week: 1, tag: "HTTP basics", term: "Statelessness",
    back: "Each HTTP request is complete on its own; the server keeps no memory of you between requests. This is what lets you run many identical servers behind a load balancer." },

  { id: "01-01-03", week: 1, tag: "HTTP basics", term: "The four parts of a request",
    back: "Method + path (with query string), headers (metadata: auth, content type), and a body (the payload — only some methods carry one)." },

  { id: "01-01-04", week: 1, tag: "HTTP basics", term: "The three parts of a response",
    back: "Status code, headers, and an optional body." },

  { id: "01-01-05", week: 1, tag: "HTTP semantics", term: "Safe (HTTP method)",
    back: "The call changes nothing on the server. GET is safe — call it a hundred times, nothing breaks." },

  { id: "01-01-06", week: 1, tag: "HTTP semantics", term: "Idempotent",
    back: "Calling it twice has the same effect as calling it once. DELETE and PUT are idempotent; POST is not." },

  { id: "01-01-07", week: 1, tag: "HTTP semantics", term: "Why isn't POST idempotent?",
    back: "POST /documents twice creates TWO documents. This is why double-clicking a submit button can charge your card twice." },

  { id: "01-01-08", week: 1, tag: "HTTP semantics", term: "Idempotency key",
    back: "A unique id the CLIENT generates and sends with a POST. The server records it and ignores repeats — the only way to make create-operations safely retryable." },

  { id: "01-01-09", week: 1, tag: "HTTP verbs", term: "GET",
    back: "Read a resource. No body, safe, idempotent." },

  { id: "01-01-10", week: 1, tag: "HTTP verbs", term: "POST",
    back: "Create a new resource. Has a body. Not safe, NOT idempotent." },

  { id: "01-01-11", week: 1, tag: "HTTP verbs", term: "PUT vs PATCH",
    back: "PUT replaces the resource entirely (idempotent). PATCH updates part of it (usually not idempotent)." },

  { id: "01-01-12", week: 1, tag: "HTTP verbs", term: "DELETE",
    back: "Remove a resource. No body, not safe, but idempotent — deleting twice leaves the same end state." },

  { id: "01-01-13", week: 1, tag: "Status codes", term: "What does the first digit of a status code tell you?",
    back: "2xx worked · 3xx look elsewhere · 4xx the CLIENT messed up · 5xx the SERVER messed up." },

  { id: "01-01-14", week: 1, tag: "Status codes", term: "Why does the 4xx/5xx split matter so much?",
    back: "It decides whether the caller fixes their request or an engineer gets paged. Every dashboard, alert and retry policy reads it." },

  { id: "01-01-15", week: 1, tag: "Status codes", term: "201 vs 204",
    back: "201 Created — a new resource was made (return it, plus a Location header). 204 No Content — it worked, there's nothing to send back." },

  { id: "01-01-16", week: 1, tag: "Status codes", term: "400 vs 422",
    back: "400 Bad Request — the request was malformed (e.g. invalid JSON). 422 Unprocessable Entity — the shape parsed fine but the values were wrong. FastAPI returns 422 constantly." },

  { id: "01-01-17", week: 1, tag: "Status codes", term: "401 vs 403",
    back: "401 Unauthorized — you didn't say who you are. 403 Forbidden — I know who you are, and you still can't." },

  { id: "01-01-18", week: 1, tag: "Status codes", term: "429",
    back: "Too Many Requests — you've been rate limited." },

  { id: "01-01-19", week: 1, tag: "Status codes", term: "Why is returning 200 OK with an error in the body a bad idea?",
    back: "It permanently blinds your monitoring. Dashboards, alerts and load balancer health checks read the status code, not your body text." },

  { id: "01-01-20", week: 1, tag: "API design", term: "What is an API, really?",
    back: "A contract — a documented set of paths, verbs and data shapes the server promises to honour. Not a technology, a promise." },

  { id: "01-01-21", week: 1, tag: "API design", term: "REST",
    back: "A style of writing that contract: model the system as nouns (resources at paths) and use HTTP verbs as the operations. POST /documents, never POST /createDocument." },

  { id: "01-01-22", week: 1, tag: "Misconceptions", term: "MISCONCEPTION: GET vs POST is about whether data shows in the URL",
    back: "No. The difference is a semantic promise. Caches and proxies will happily replay a GET — a disaster if your GET secretly changes something." },

  { id: "01-01-23", week: 1, tag: "System design", term: "Why is the client↔server arrow the important part of the diagram?",
    back: "It's the contract seam: auth, rate limiting, latency measurement and error classification all happen there. Everything else hides behind it and can be replaced." },

];
