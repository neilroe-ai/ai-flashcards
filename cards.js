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

  /* ---- Week 1, Topic 2 — JSON, request/response shape, contracts ---- */

  { id: "01-02-01", week: 1, tag: "JSON", term: "What is JSON?",
    back: "A text format for structured data, used to carry the request and response bodies of an API." },

  { id: "01-02-02", week: 1, tag: "JSON", term: "JSON building blocks",
    back: "Objects {} (quoted-key → value pairs) and arrays [] (ordered lists), holding strings, numbers, booleans, or null." },

  { id: "01-02-03", week: 1, tag: "JSON", term: "The \"shape\" of a JSON body",
    back: "Which keys are present and what type each value is. The shape is what an API promises to send and accept." },

  { id: "01-02-04", week: 1, tag: "JSON", term: "How are JSON keys written?",
    back: "Always as double-quoted strings — never bare words or single quotes." },

  { id: "01-02-05", week: 1, tag: "Misconceptions", term: "MISCONCEPTION: JSON is the same as a Python dict",
    back: "No. JSON uses lowercase true/false/null, requires double-quoted keys, and allows no trailing commas and no comments." },

  { id: "01-02-06", week: 1, tag: "Contracts", term: "What is an API contract?",
    back: "The agreed request/response shape that both sides promise to honour. It's what lets client and server, built separately, still work together." },

  { id: "01-02-07", week: 1, tag: "Contracts", term: "Why does shape stability matter?",
    back: "Clients are written against the promised shape. Keep it stable and every existing client keeps working with no changes; alter it and they break." },

  { id: "01-02-08", week: 1, tag: "Contracts", term: "Why is a broken contract easy to ship?",
    back: "The server doesn't error when it changes shape — it runs fine. The breakage lands on the client, so nothing obvious flags it at the source." },

  { id: "01-02-09", week: 1, tag: "Contracts", term: "MISCONCEPTION: if the server returns 200 the contract is fine",
    back: "No. A server can change its response shape and still return 200. The status says the call succeeded, not that the shape matched what clients expect." },

  /* ---- Week 1, Topic 2 p3 — breaking vs non-breaking changes ---- */

  { id: "01-02-10", week: 1, tag: "Contracts", term: "Breaking vs non-breaking change",
    back: "Breaking = it can make an existing client stop working. Non-breaking = every old client keeps running untouched." },

  { id: "01-02-11", week: 1, tag: "Contracts", term: "Rule of thumb for safe API changes",
    back: "Adding optional things is safe; removing, renaming, or tightening a requirement is breaking." },

  { id: "01-02-12", week: 1, tag: "Contracts", term: "How do you make a breaking change safely?",
    back: "Don't edit the old contract in place — ship a new version (e.g. /v2/...) beside the old one so existing clients keep using v1." },

  { id: "01-02-13", week: 1, tag: "Misconceptions", term: "MISCONCEPTION: adding a field is always safe",
    back: "Only for RESPONSE fields (old clients ignore extras). Adding a REQUIRED request field is breaking — old clients don't send it and get rejected." },

  /* ---- Week 2, Topic 1 — validate at boundaries (Pydantic) ---- */

  { id: "02-01-01", week: 2, tag: "Validation", term: "Boundary (in a system)",
    back: "Any place untrusted data crosses into your system — a request body, webhook, config file, or external API response." },

  { id: "02-01-02", week: 2, tag: "Validation", term: "What a Pydantic model does",
    back: "Declares a data shape as a Python class, then enforces it: data either matches the model (checked + coerced) or is rejected with a loud error." },

  { id: "02-01-03", week: 2, tag: "Validation", term: "\"Fail loudly at the edge\" — why",
    back: "A bad value caught at the boundary gives a clean error pointing at the field. The same value caught deep in the code gives a cryptic crash or silently wrong data." },

  { id: "02-01-04", week: 2, tag: "Validation", term: "Coercion (Pydantic)",
    back: "Pydantic parses as well as checks — a string \"30\" for an int field becomes the int 30, rather than being rejected." },

  { id: "02-01-05", week: 2, tag: "Validation", term: "Payoff of validating at the boundary",
    back: "Everything past the boundary is trusted and typed — business logic never has to re-check if a field is missing or the wrong type." },

  { id: "02-01-06", week: 2, tag: "Misconceptions", term: "MISCONCEPTION: passing Pydantic validation means the data is correct",
    back: "It means the shape and types are right, not the business rules. age: int still accepts -5 or 99999 — value rules are a separate layer." },

  /* ---- Week 2 review (Fri 2026-07-24) — connections across the week ---- */

  { id: "02-RV-01", week: 2, tag: "Validation", term: "Contract vs. its enforcement",
    back: "The contract is the agreed shape at the seam; Pydantic at the boundary is the thing that actually checks it. A contract nothing checks isn't real." },

  { id: "02-RV-02", week: 2, tag: "Contracts", term: "Two rejection layers at a boundary",
    back: "Shape/type failures are caught by Pydantic automatically (→ 422). Business-rule failures (party size 500, past date) pass Pydantic and need a separate check in your logic." },

  { id: "02-RV-03", week: 2, tag: "Contracts", term: "Softer alternative to versioning for a new required request field",
    back: "Add it as optional first; once every client is sending it, tighten it to required. Avoids a hard break without spinning up a v2." },

  { id: "02-RV-04", week: 2, tag: "Validation", term: "Where validation belongs (besides request bodies)",
    back: "Any untrusted edge: webhook payloads, config/env vars, external API responses, queue messages, CLI args." },

  /* ---- Week 2 Topic 2 (Mon 2026-07-27) — validators, defaults, parse+validate ---- */

  { id: "02-02-01", week: 2, tag: "Validation", term: "Field default (e.g. party_size: int = 2)",
    back: "If the client omits the field, the boundary fills it in — so every layer downstream receives a complete object and never has to check for None." },

  { id: "02-02-02", week: 2, tag: "Validation", term: "field validator vs. model validator",
    back: "A field validator sees one field in isolation; a model validator runs after all fields are parsed and can check relationships between them (e.g. checkout after checkin)." },

  { id: "02-02-03", week: 2, tag: "Validation", term: "model_validate_json()",
    back: "Parses raw JSON bytes and validates them against the model in one step, so you get one uniform ValidationError instead of a separate JSON-decode failure." },

  { id: "02-02-04", week: 2, tag: "Validation", term: "Three untrusted edges that use the same Pydantic parse-and-validate move",
    back: "HTTP request bodies, LLM JSON output, and inbound webhook/queue payloads — one mechanism reused at every place bytes enter the system." },

  { id: "02-02-05", week: 2, tag: "Validation", term: "Why Field(default_factory=list) instead of tags: list = []",
    back: "A bare [] would be one shared object across every instance; default_factory builds a fresh list per object." },

  { id: "02-02-06", week: 2, tag: "Misconceptions", term: "MISCONCEPTION: validators are just extra type checking",
    back: "Validators are where business rules get promoted into the contract — types can't express 'party size 1–20' or 'checkout after checkin'." },

  { id: "02-03-01", week: 2, tag: "Config", term: "Environment variable",
    back: "A key/value string the OS hands your process at startup — the standard way config differs between dev, staging and production without changing the code." },

  { id: "02-03-02", week: 2, tag: "Config", term: "Why env vars need validating like request bodies",
    back: "They arrive as strings, so \"8000\" isn't an int and \"false\" is truthy; pydantic-settings coerces them to real types and refuses to boot if one is missing." },

  { id: "02-03-03", week: 2, tag: "Config", term: "Field with no default in a Settings model",
    back: "It is required — the process crashes at startup naming the missing variable, instead of failing later on the first request that needs it." },

  { id: "02-03-04", week: 2, tag: "Config", term: "SecretStr",
    back: "A Pydantic type whose repr prints ********, so a key can't leak into logs or tracebacks; you call .get_secret_value() at the one place it's used." },

  { id: "02-03-05", week: 2, tag: "Config", term: "Why .env is gitignored but .env.example is committed",
    back: "The example documents which variables are required without exposing values; a real secret committed once stays in git history forever." },

  { id: "02-03-06", week: 2, tag: "Misconceptions", term: "MISCONCEPTION: environment variables are for secrets",
    back: "Secrets are only a subset — config is anything that differs per environment, secret or not, so the same image can run unchanged everywhere." },

  { id: "02-rev-01", week: 2, tag: "Config", term: "Request validation vs config validation — the difference",
    back: "Request data crosses the boundary once per request and fails one caller with a 422; config crosses once per process and fails the whole boot before any traffic arrives." },

  { id: "02-rev-02", week: 2, tag: "Config", term: "Why crashing at startup is the better failure",
    back: "Bad config makes every request wrong, so refusing to boot is cheaper and more obvious than serving wrong answers to real users." },

  { id: "02-rev-03", week: 2, tag: "Validation", term: "What the settings object feeds later in the stack",
    back: "The FastAPI app at import, the DB connection, core/llm.py's key and model tier, and docker-compose injects it at deploy time." },

  { id: "02-rev-04", week: 2, tag: "Validation", term: "Lax-in, strict-out",
    back: "Pydantic coerces \"7\" to 7 on the way in because wire data is text, but everything past the boundary is a real typed value." },

  { id: "02-rev-05", week: 2, tag: "Misconceptions", term: "MISCONCEPTION: if config validates at startup, the config is correct",
    back: "Validation only proves the shape is right — a revoked-but-well-formed API key passes and fails at first use; that needs a health check or runtime error path, not a type." },

  { id: "03-01-01", week: 3, tag: "FastAPI", term: "The four jobs of a web framework",
    back: "Parse raw HTTP into a Request object, route method+path to a handler, call your function with typed args, serialise the return value into a response." },

  { id: "03-01-02", week: 3, tag: "FastAPI", term: "What a route is keyed on",
    back: "Method and path together — GET /quotes and POST /quotes are two separate routes." },

  { id: "03-01-03", week: 3, tag: "FastAPI", term: "Path parameter vs query parameter",
    back: "A path param identifies the resource (/quotes/42) and is required; a query param modifies the request (?status=draft) and takes a default." },

  { id: "03-01-04", week: 3, tag: "FastAPI", term: "The removal test for URL design",
    back: "If deleting the value still leaves a sensible request, it belongs in the query string; if the URL becomes meaningless, it belongs in the path." },

  { id: "03-01-05", week: 3, tag: "Validation", term: "Why type hints on a handler are validation",
    back: "FastAPI runs Pydantic on path and query values, so /quotes/abc against quote_id: int returns 422 before your function is called." },

  { id: "03-01-06", week: 3, tag: "Misconceptions", term: "MISCONCEPTION: the URL is just a string you parse yourself",
    back: "The URL is untrusted input crossing the validation boundary like any body — the framework types and validates it for you." },

  { id: "03-02-01", week: 3, tag: "FastAPI", term: "How FastAPI decides a parameter is the request body",
    back: "By its type — a Pydantic model parameter is read from the body, no annotation needed." },

  { id: "03-02-02", week: 3, tag: "FastAPI", term: "Parameter source rules (path / query / body)",
    back: "Name matches a {placeholder} in the path → path param; a plain scalar that doesn't → query param; a Pydantic model → body." },

  { id: "03-02-03", week: 3, tag: "Validation", term: "What response_model does",
    back: "It validates and filters the outgoing data, acting as a second validation boundary on the way out." },

  { id: "03-02-04", week: 3, tag: "FastAPI", term: "JSON vs HTML response — what decides",
    back: "The audience: machines get JSON from a returned dict or model; browsers get HTML from an HTMLResponse or rendered template." },

  { id: "03-02-05", week: 3, tag: "Misconceptions", term: "MISCONCEPTION: one Pydantic model can serve both request and response",
    back: "In and out are different contracts — the inbound model omits server-owned fields like id, and the outbound model must omit secrets like password_hash." },

  { id: "03-03-01", week: 3, tag: "FastAPI", term: "Dependency injection — one sentence",
    back: "A route declares what it needs via Depends(f); FastAPI calls f first and passes the result in, instead of the route fetching it itself." },

  { id: "03-03-02", week: 3, tag: "FastAPI", term: "The main reason DI exists",
    back: "Testability — a test can swap a dependency with app.dependency_overrides without touching the route's code." },

  { id: "03-03-03", week: 3, tag: "FastAPI", term: "What a dependency using `yield` gives you",
    back: "Setup before the route and teardown after it, running even if the route raises — where DB session open/close lives." },

  { id: "03-03-04", week: 3, tag: "FastAPI", term: "APIRouter",
    back: "A mini-app defined in its own file and mounted with app.include_router(), optionally carrying a URL prefix, tags, and router-wide dependencies." },

  { id: "03-03-05", week: 3, tag: "FastAPI", term: "Dependency caching per request",
    back: "FastAPI resolves the dependency tree once per request and caches each result, so a shared dependency like get_db runs only once even if several things ask for it." },

  { id: "03-03-06", week: 3, tag: "Misconceptions", term: "MISCONCEPTION: Depends() is special framework magic",
    back: "It is just a calling convention — Depends(f) means 'call f first and pass me the result'; any callable works." },

  { id: "03-04-01", week: 3, tag: "FastAPI", term: "Middleware — one sentence",
    back: "A ring wrapped around every request: it receives the request, calls the rest of the app, and can modify what goes in or comes back out." },

  { id: "03-04-02", week: 3, tag: "FastAPI", term: "Middleware vs dependency — how to choose",
    back: "If the logic is the same for every route and doesn't care what the endpoint does, it's middleware; if it's specific to what a route needs, it's a dependency." },

  { id: "03-04-03", week: 3, tag: "FastAPI", term: "Exception handler",
    back: "A function registered per exception type that turns any raised error into a consistent sanitised response, so routes can just raise instead of using try/except everywhere." },

  { id: "03-04-04", week: 3, tag: "FastAPI", term: "Order of the request lifecycle",
    back: "Middleware → routing → validation → dependencies → handler, then back out through the same layers in reverse." },

  { id: "03-04-05", week: 3, tag: "FastAPI", term: "What `async def` actually buys you",
    back: "At each await the route yields the event loop so other requests can run while it waits on I/O — more concurrent in-flight requests per worker." },

  { id: "03-04-06", week: 3, tag: "Misconceptions", term: "MISCONCEPTION: async def makes code faster",
    back: "It only helps if you await real I/O; a blocking call inside async def freezes the whole event loop for every user, which is worse than a plain def route." },

  { id: "arch-01-01-01", week: 1, tag: "Helicopter view", term: "The six boxes of an AI application",
    back: "Frontend, API/backend, AI layer, data, background work, infrastructure — every AI app decomposes into these six roles." },

  { id: "arch-01-01-02", week: 1, tag: "Helicopter view", term: "Job of the API / backend box",
    back: "The traffic cop: it receives the question, decides which parts handle it, and sends the answer back to the frontend." },

  { id: "arch-01-01-03", week: 1, tag: "Helicopter view", term: "Why background work sits off the main path",
    back: "It runs jobs with nobody waiting — like OCR-ing thousands of scanned pages — so it stocks the data box instead of serving the live request." },

  { id: "arch-01-01-04", week: 1, tag: "Data", term: "OCR",
    back: "Optical character recognition — turning a picture of a page (a scanned manual or job card) into text a computer can search." },

  { id: "arch-01-01-05", week: 1, tag: "Misconceptions", term: "MISCONCEPTION: the AI model is the system",
    back: "The model is one box of six and rarely the hard part; most AI projects fail on the data box — getting the source documents in and findable." },

  { id: "arch-01-01-06", week: 1, tag: "Helicopter view", term: "First question when an AI app is slow, wrong or expensive",
    back: "Which box? Naming the failing box (frontend, API, AI layer, data, background, infrastructure) before debugging is the whole point of the helicopter view." },

  { id: "arch-01-02-01", week: 1, tag: "Golden path", term: "The 'golden path' of a system",
    back: "The one core interaction the whole system exists to serve. For the shop assistant: tech names machine + symptom, gets the likely fix with its source." },

  { id: "arch-01-02-02", week: 1, tag: "Golden path", term: "Grounding",
    back: "The rule that the model may only answer from retrieved source text (the shop's own manuals and logs), not from its general training." },

  { id: "arch-01-02-03", week: 1, tag: "Golden path", term: "Why the answer must carry its source",
    back: "So the tech can verify the fix against the real page before acting — a citation makes the answer checkable instead of blindly trusted." },

  { id: "arch-01-02-04", week: 1, tag: "Golden path", term: "Correct answer when nothing matches",
    back: "'I don't have this.' An honest refusal beats a plausible guess — a confident wrong fix on heavy machinery is worse than no answer." },

  { id: "arch-01-02-05", week: 1, tag: "Misconceptions", term: "MISCONCEPTION: 'done' means the AI gives a good answer",
    back: "Done means a good answer welded to its source, plus an honest 'I don't know' when there isn't one. The citation and refusal are designed-in features." },

  { id: "arch-01-03-01", week: 1, tag: "Request trace", term: "The live request path, in order",
    back: "Frontend (1) → API (2) → AI layer (3) → Data (4), then the answer travels back the same way. Only four boxes touch a live request." },

  { id: "arch-01-03-02", week: 1, tag: "Request trace", term: "Each box hands the next what?",
    back: "A narrower, cleaner thing: frontend passes the raw question, API a checked request, AI a search query then a drafted answer, Data the matching pages." },

  { id: "arch-01-03-03", week: 1, tag: "Request trace", term: "Why isn't background work a step in a live request?",
    back: "It ran ahead of time (the night before) — OCR-ing and loading scanned paper so Data already holds it. The tech never waits on it at 2am." },

  { id: "arch-01-03-04", week: 1, tag: "Request trace", term: "Infrastructure's place in a request trace",
    back: "Not a sequential step — it's the ground everything runs on, always present but never a stop the request passes through." },

  { id: "arch-01-03-05", week: 1, tag: "Misconceptions", term: "MISCONCEPTION: every box is a stop on every request",
    back: "It isn't. Background work and infrastructure are always part of the system but not steps in a live request. 'Part of the system' ≠ 'part of this request'." },

  { id: "arch-01-review-01", week: 1, tag: "Decisions", term: "Week 1 decision: build vs buy vs keep the binders — which, and why?",
    back: "Build a custom assistant. The problem is the shop's own knowledge locked in their paper; only a custom, grounded system can read and answer from it. Buying solves a different problem; binders already fail at 2am." },
  { id: "arch-01-review-02", week: 1, tag: "Decisions", term: "Why not just buy an MRP/ERP for the fab shop?",
    back: "It's generic — built for jobs and inventory, not their thirty-year-old machines, and it can't read thirty years of scanned paper. It replaces the wrong thing." },
  { id: "arch-01-review-03", week: 1, tag: "Decisions", term: "Why lay out 'keep the binders' at all if it's rejected?",
    back: "It's the zero-cost do-nothing base case every build must beat. Naming its failure (knowledge retires, line stops at 2am) is what justifies spending on a build." },
  { id: "arch-01-review-04", week: 1, tag: "Decisions", term: "What does building the assistant give that buying or binders can't?",
    back: "Answers grounded in the shop's own manuals and repair logs, OCR of scanned paper, and a way to save new fixes back into the system." },
  { id: "arch-01-review-05", week: 1, tag: "Golden path", term: "The quality bar vs the request trace — how do they relate?",
    back: "The golden path (grounded, cited answer or honest refusal) is the quality bar; the request trace is that bar running through the six boxes on a live question." },

  { id: "arch-02-01-01", week: 2, tag: "Frontend", term: "The frontend's job, in one line",
    back: "Capture the question and display the answer — nothing more. It's the only box a human touches." },
  { id: "arch-02-01-02", week: 2, tag: "Frontend", term: "Thin client",
    back: "A frontend that carries almost no logic — it just sends input out and paints results back. The thinking (search, the fix) lives in the AI and data boxes behind it." },
  { id: "arch-02-01-03", week: 2, tag: "Frontend", term: "Why keep the frontend thin?",
    back: "So you can change or add screens (tablet → phone → voice) without rebuilding the system. Keep the brain shared behind it; swap the front door, keep the house." },
  { id: "arch-02-01-04", week: 2, tag: "Frontend", term: "Shop-floor reality as design constraints",
    back: "Greasy gloves, noise, 2am stress mean big taps, few steps, readable at arm's length. The frontend is judged on whether a stressed tech can get a fix, not on looks." },
  { id: "arch-02-01-05", week: 2, tag: "Misconceptions", term: "MISCONCEPTION: the frontend is 'the app', so that's where the product lives",
    back: "No — the frontend is the thin edge. The value lives in the data and AI boxes behind it; the frontend is just the window onto them." },

  { id: "arch-02-02-01", week: 2, tag: "Frontend", term: "The three beats of the interaction",
    back: "Ask (machine + symptom, structured) → Answer (the fix, with its source) → Close the loop (did it work?). A designed flow, not open-ended chat." },
  { id: "arch-02-02-02", week: 2, tag: "Frontend", term: "Save-a-new-fix loop",
    back: "When a tech solves something the system didn't know, they save it back as a new repair-log entry — so it becomes tomorrow's answer for the next tech." },
  { id: "arch-02-02-03", week: 2, tag: "Frontend", term: "Read path vs write path",
    back: "The read path fetches an answer from the data; the write path saves a new fix back into it. Same thin frontend, two directions." },
  { id: "arch-02-02-04", week: 2, tag: "Frontend", term: "Why structure the 'Ask' step instead of a blank chat box?",
    back: "A stressed tech at 2am phrases things a hundred ways. Structured prompts (machine, symptom/code) send a clean question out and get a reliable answer back." },
  { id: "arch-02-02-05", week: 2, tag: "Misconceptions", term: "MISCONCEPTION: the assistant is just a chatbot / search box",
    back: "No — it's a purpose-shaped loop with a write-back that grows the knowledge. The shape (ask → answer → save) is the design." },

  { id: "arch-02-dec-01", week: 2, tag: "Decisions", term: "Week 2 decision: tablet kiosk vs personal phone vs voice?",
    back: "Mounted tablet kiosks first — the answer is a procedure with a diagram and a citation, so it must be readable and shop-owned; phone later, voice parked." },
  { id: "arch-02-dec-02", week: 2, tag: "Decisions", term: "Main cost of choosing a shared tablet kiosk",
    back: "Hardware and mounting per cell, plus a shared login that weakens 'who saved this fix?' — fixed by named per-tech logins." },
  { id: "arch-02-dec-03", week: 2, tag: "Frontend", term: "Why voice loses on a fab shop floor",
    back: "The shop is loud so recognition suffers, and voice can't show a wiring diagram or a visible source citation." },
  { id: "arch-02-dec-04", week: 2, tag: "Frontend", term: "Why a citation has to be visible",
    back: "Grounding only reassures if the tech can check the source; an answer read aloud gives nothing to verify against." },
  { id: "arch-02-dec-05", week: 2, tag: "Frontend", term: "Why is 'which screen?' a cheap decision to revisit?",
    back: "The frontend is thin, so adding a phone or voice later is a new screen on the same brain — not a rebuild." },

  { id: "arch-03-01-01", week: 3, tag: "Backend", term: "Single front door",
    back: "Every request from the floor goes through the backend; it is the only thing allowed to talk to the AI layer and the data." },
  { id: "arch-03-01-02", week: 3, tag: "Backend", term: "Why can't the tablet call the AI model directly?",
    back: "It would have to carry the API key — a paid credential you can't rotate or trust once it's on twenty devices in a workshop." },
  { id: "arch-03-01-03", week: 3, tag: "Backend", term: "Four things that live behind the front door",
    back: "Secrets/keys, identity (who is asking), the system rules like grounding, and the log of every question and answer." },
  { id: "arch-03-01-04", week: 3, tag: "Backend", term: "Why one door makes swapping parts cheap",
    back: "The frontend only ever knew the door, so you can change model vendor or move the data store without touching any tablet." },
  { id: "arch-03-01-05", week: 3, tag: "Misconceptions", term: "MISCONCEPTION: the backend is just a middleman passing messages",
    back: "No — it's where authority lives: credentials, identity, the rules, and the audit trail. A pipe would leak all four onto the shop floor." },

  { id: "arch-03-02-01", week: 3, tag: "Backend", term: "The five jobs the backend does on one request",
    back: "Identify who's asking, shape the question, orchestrate (find sources then ask the model), enforce the grounding rule, log and answer." },
  { id: "arch-03-02-02", week: 3, tag: "Backend", term: "Find-then-ask",
    back: "The backend fetches the manual pages and repair logs first, then hands them to the model — so the answer is written from real sources, not invented." },
  { id: "arch-03-02-03", week: 3, tag: "Backend", term: "Where does the 'no source → I don't know' check live?",
    back: "In the backend, after the model replies and before the answer is sent — not inside the model's prompt." },
  { id: "arch-03-02-04", week: 3, tag: "Backend", term: "Why shape a loose question into structured fields?",
    back: "Turning free text into machine = Press 3, code = E14 gives the search something precise to match, which decides how good the retrieved sources are." },
  { id: "arch-03-02-05", week: 3, tag: "Backend", term: "Orchestrator",
    back: "The component that decides the order of steps in a request. Here it's the backend — the AI layer only responds when asked." },
  { id: "arch-03-02-06", week: 3, tag: "Misconceptions", term: "MISCONCEPTION: the AI layer does the retrieving and the deciding",
    back: "No — the backend orchestrates. If the model chooses its own steps you have a chatbot; if the backend does, you have a system you can audit and change." },

  { id: "arch-03-03-01", week: 3, tag: "Backend", term: "Timeout (in a request)",
    back: "A deadline the backend puts on a downstream call — 'wait up to N seconds, then stop.' It bounds how long the person waits, not how fast the work runs." },
  { id: "arch-03-03-02", week: 3, tag: "Backend", term: "Why is a slow call less dangerous than a hung one?",
    back: "Slow eventually answers; hung waits forever. Without a deadline one stuck step freezes the whole request and the tech stares at a spinner that never resolves." },
  { id: "arch-03-03-03", week: 3, tag: "Backend", term: "Who is a timeout a promise to?",
    back: "The person, not the machine. The downstream work may still be grinding; the deadline guarantees the waiting tech gets a fast, honest reply either way." },
  { id: "arch-03-03-04", week: 3, tag: "Backend", term: "The honest reply when a deadline is hit",
    back: "'Still working' or 'couldn't answer in time' — a bounded wait keeps the tech's trust; an endless spinner burns it." },
  { id: "arch-03-03-05", week: 3, tag: "Misconceptions", term: "MISCONCEPTION: a timeout makes slow work faster",
    back: "It doesn't — it only caps how long anyone waits. The slow work is still slow and has to be solved elsewhere (e.g. indexing ahead of time, or handing it off)." },

];
