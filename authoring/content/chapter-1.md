# Chapter 1 · Propositional logic

Logic separates an argument's structure from the subject it discusses. Start with statements that have truth values, combine them using precise operators, then ask whether a conclusion must follow. This chapter's four lesson documents contain 91 slides.

## 1.1 Propositions and connectives

*Reviewed source: Dmath1-1.pdf, 35 pages.*

### Recognize what can be true or false

A **proposition** is a declarative statement with exactly one of two truth values: true (T or 1) or false (F or 0). Knowing which value it has is unnecessary: a prediction can still be a proposition. Questions, commands and expressions with unassigned variables do not yet have this form.

| Expression | Classification | Reason |
|---|---|---|
| 1 + 1 = 2 | Proposition, true | A definite assertion |
| 2 + 2 = 3 | Proposition, false | Being false does not disqualify it |
| What time is it? | Not a proposition | A question |
| Read this carefully | Not a proposition | A command |
| x + 1 = 2 | Open statement | Its truth depends on x |
| We will live on the Moon by the end of this century | Proposition in the course | Unknown truth is different from no truth value |

The slides classify “Dalian is a beautiful city” as a proposition. Follow that classroom convention when recognizing the example, while understanding that ordinary subjective wording needs a settled interpretation to have a definite truth value. The liar sentence “I am lying” is excluded in the slides.

A **primitive** proposition is treated as an indivisible statement. A **compound** proposition combines propositions using connectives. Use p, q and r for atomic statements; write their meanings before translating a sentence.

### Six operators, one master table

| p | q | ¬p | p ∧ q | p ∨ q | p ⊕ q | p → q | p ↔ q |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |

- **Negation ¬p:** reverses the truth value.
- **Conjunction p ∧ q:** both must be true. “But” has the same logical role as “and.”
- **Inclusive disjunction p ∨ q:** at least one is true; both are allowed.
- **Exclusive OR p ⊕ q:** exactly one is true.
- **Implication p → q:** only the case p = 1, q = 0 makes it false.
- **Biconditional p ↔ q:** both have the same truth value.

**Course examples.** If p means “Today is Friday” and q means “It is raining,” p ∧ q holds on rainy Fridays; p ∨ q holds on every Friday and every rainy day. “Jack is intelligent, but not diligent” becomes p ∧ ¬q when q means diligent. The one-lesson choice between discrete mathematics and operating systems from 8–9 a.m. is interpreted as exclusive OR by the slides' context; the word “or” alone does not always mean exclusive OR.

### Translate implication without reversing it

For p → q, p is the **antecedent/hypothesis** and q the **consequent/conclusion**.

| Wording | Formula |
|---|---|
| If p, then q; q if p; q whenever p | p → q |
| p only if q | p → q |
| p is sufficient for q | p → q |
| q is necessary for p | p → q |
| p is necessary and sufficient for q | p ↔ q |
| q unless ¬p | p → q |

“Unless” requires care: **A unless B** ordinarily means ¬B → A, equivalently A ∨ B; it does not by itself assert that A and B cannot both happen.

The **converse** of p → q is q → p. The **contrapositive** is ¬q → ¬p. The original and contrapositive are equivalent; the converse need not be. For “If today is Thursday, I have a test,” the converse starts “If I have a test”; the contrapositive starts “If I do not have a test.”

### Worked translations from the slides

1. “You can access the Internet from campus only if you are a computer science major or not a freshman.” Let p = campus Internet access, q = CS major, r = freshman. The access condition is **p → (q ∨ ¬r)**.
2. “You cannot ride the roller coaster if you are under four feet tall unless you are older than sixteen.” Let p = under four feet, q = older than sixteen, r = can ride. Under the course reading: **(p ∧ ¬q) → ¬r**.
3. Let p = sunny, q = go climbing, r = free. “I go climbing only if I am free and it is sunny” becomes **q → (r ∧ p)**. “Sunny weather and free time are sufficient for climbing” becomes **(p ∧ r) → q**.

**Source correction:** the last translation on slide 35 prints a biconditional for “sufficient.” The stated sentence supplies an implication only. Do not add necessity without evidence.

The course's precedence is **¬, ∧, ∨, →, ↔**, from highest to lowest. Use parentheses whenever they make the intended scope clearer: p → q ∧ r means p → (q ∧ r), whereas (p → q) ∧ r is different.

**Check yourself:** a statement and its converse are different claims. An implication with a false antecedent is true in material logic; it does not prove its consequent.

## 1.2 Propositional WFF and assignment

*Reviewed source: Dmath1-2.pdf, 16 pages.*

A **well-formed formula (WFF)** is a syntactically legal expression. Syntax answers “Is this constructed correctly?” An **assignment** gives its variables truth values and allows you to evaluate it. Syntax and truth are separate questions.

### Build a formula recursively

1. Every propositional variable is a WFF.
2. If A is a WFF, then ¬A is a WFF.
3. If A and B are WFFs, then (A ∧ B), (A ∨ B), (A → B) and (A ↔ B) are WFFs.
4. A finite sequence of these constructions produces every WFF covered by the definition.

Capital A and B often name whole formulas, while p, q and r name individual variables.

**Valid slide examples:** p ∧ q → r, (p ↔ s) ∨ r, and ¬p. **Invalid examples:** pq ∨ r lacks an operator, (p ∨ q has an unmatched parenthesis, and →r lacks an antecedent. Repairing a malformed string creates a possible formula; the repair is not an equivalence proof.

### Evaluate from the inside outward

The course assigns p = “2 is prime” (1), q = “3 is even” (0), r = “5 is rational” (1). For A = (p ∨ q) → r:

1. p ∨ q = 1 ∨ 0 = 1.
2. A = 1 → 1 = 1.

The arithmetic examples R(x,y,z): x + y = z and Q(x,y,z): x − y = z similarly illustrate substitution. R(2,−1,5) is false, R(3,4,7) true, Q(2,−1,3) true, and Q(3,4,7) false.

### Construct a complete truth table

For n distinct variables there are **2ⁿ assignments**. List each exactly once; use consistent row order. Add a column for each useful **subformula** (“hierarchy formula” in the slides), then compute the final column.

| p | q | r | p ∨ q | (p ∨ q) → r | ¬r → p | q ∧ (¬r → p) |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 |

### Classify the final column

| Classification | Final column | Course example |
|---|---|---|
| Tautology | All 1 | p → (p ∨ q) |
| Contradiction | All 0 | p ∧ (¬p ∧ q) |
| Contingency | Both 0 and 1 | (p ∨ q) → r |
| Satisfiable | At least one 1 | Every tautology and every contingency |
| Unsatisfiable | No 1 | Every contradiction |

A tautology is satisfiable. “Satisfiable” does not mean “sometimes true and sometimes false.”

**Source correction:** slide 16 accidentally includes the contradictory first exercise among satisfiable formulas. Its truth table is all zero; the second exercise is the satisfiable one.

**Exam routine:** count distinct variables → write 2ⁿ rows → mark the outermost operator → evaluate smaller formulas first → classify only after finishing the final column.

## 1.3 Propositional equivalences

*Reviewed source: Dmath1-3.pdf, 12 pages.*

Two formulas A and B are **logically equivalent**, written **A ≡ B**, when they agree on every assignment. Equivalently, A ↔ B is a tautology. Agreement on one assignment is insufficient.

### Laws to recognize and use

| Family | Equivalences |
|---|---|
| Identity | p ∧ T ≡ p; p ∨ F ≡ p |
| Domination | p ∨ T ≡ T; p ∧ F ≡ F |
| Idempotence | p ∨ p ≡ p; p ∧ p ≡ p |
| Double negation | ¬¬p ≡ p |
| Commutativity | p ∨ q ≡ q ∨ p; p ∧ q ≡ q ∧ p |
| Associativity | (p ∨ q) ∨ r ≡ p ∨ (q ∨ r); likewise for ∧ |
| Distributivity | p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r) |
| Distributivity | p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) |
| De Morgan | ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q |
| Absorption | p ∨ (p ∧ q) ≡ p; p ∧ (p ∨ q) ≡ p |
| Negation | p ∨ ¬p ≡ T; p ∧ ¬p ≡ F |

### Implication and biconditional identities

- p → q ≡ ¬p ∨ q ≡ ¬q → ¬p.
- ¬(p → q) ≡ p ∧ ¬q.
- p ∨ q ≡ ¬p → q; p ∧ q ≡ ¬(p → ¬q).
- (p → q) ∧ (p → r) ≡ p → (q ∧ r).
- (p → r) ∧ (q → r) ≡ (p ∨ q) → r.
- (p → q) ∨ (p → r) ≡ p → (q ∨ r).
- (p → r) ∨ (q → r) ≡ (p ∧ q) → r.
- p ↔ q ≡ (p → q) ∧ (q → p) ≡ (p ∧ q) ∨ (¬p ∧ ¬q).
- p ↔ q ≡ ¬p ↔ ¬q; ¬(p ↔ q) ≡ p ↔ ¬q.

### Two proof methods

**Truth-table proof:** list all assignments and compare final columns. For p → q and ¬p ∨ q the columns are both 1,1,0,1 in 00,01,10,11 order. For ¬(p ∨ q) and ¬p ∧ ¬q they are both 1,0,0,0.

**Law-by-law proof:** transform one side to the other and name the law used at each step. The teacher's nested-implication example is:

| Formula | Reason |
|---|---|
| p → (q → r) | Start |
| p → (¬q ∨ r) | Eliminate inner implication |
| ¬p ∨ (¬q ∨ r) | Eliminate outer implication |
| ¬q ∨ (¬p ∨ r) | Associativity and commutativity |
| q → (¬p ∨ r) | Reintroduce implication |
| q → (p → r) | Reintroduce implication |

**Fast strategy:** remove → and ↔ when they obstruct the target; push negations inward using De Morgan; collect or distribute terms; apply absorption or complement laws. Every step must remain an equivalence. Inference rules that merely preserve truth in one direction cannot replace equivalence steps indiscriminately.

## 1.4 Rules of inference

*Reviewed source: Dmath1-4(1).pdf, 28 pages.*

An argument has premises P₁,…,Pₙ and a conclusion Q. It is **valid** when no assignment makes all premises true and Q false. Equivalently, (P₁ ∧ … ∧ Pₙ) → Q is a tautology. Validity concerns the implication from premises; it does not establish that the premises actually describe the world.

### Eight rules from the course

| Name | Given | May infer |
|---|---|---|
| Addition | p | p ∨ q |
| Simplification | p ∧ q | p (or q) |
| Conjunction | p; q | p ∧ q |
| Modus ponens (MP) | p; p → q | q |
| Modus tollens (MT) | ¬q; p → q | ¬p |
| Hypothetical syllogism (HS) | p → q; q → r | p → r |
| Disjunctive syllogism (DS) | p ∨ q; ¬p | q |
| Resolution | p ∨ q; ¬p ∨ r | q ∨ r |

The skiing example uses MP: it snows; if it snows, we ski; therefore we ski. From “below freezing,” addition permits “below freezing or snowing.” From “below freezing and snowing,” simplification permits “below freezing.” The rain/barbecue chain uses HS.

**Fallacy: affirming the consequent.** From p → q and q you cannot infer p. A counterassignment is p = 0, q = 1: both premises are true but p is false. Likewise p → q and ¬p do not imply ¬q; this is denying the antecedent.

### Write proofs the way the teacher expects

Use three columns: **line number, statement, justification with earlier line numbers**. The slides abbreviate premise as **P**, transformations using previous lines as **T**, equivalence as **E**, and inference as **I**. For learning, the app uses the full rule names beside these abbreviations.

### Worked proof: rain, sailing, and the trophy

Let r = rain, f = fog, s = sailing race held, l = lifesaving demonstration held, t = trophy awarded. Premises are (¬r ∨ ¬f) → (s ∧ l), s → t, and ¬t. Prove r.

| Line | Statement | Reason |
|---|---|---|
| 1 | (¬r ∨ ¬f) → (s ∧ l) | Premise |
| 2 | ¬(s ∧ l) → ¬(¬r ∨ ¬f) | Contraposition of 1 |
| 3 | (¬s ∨ ¬l) → (r ∧ f) | De Morgan and double negation in 2 |
| 4 | s → t | Premise |
| 5 | ¬t | Premise |
| 6 | ¬s | MT, 4 and 5 |
| 7 | ¬s ∨ ¬l | Addition, 6 |
| 8 | r ∧ f | MP, 3 and 7 |
| 9 | r | Simplification, 8 |

The main decision is to work backward from the negative trophy statement: no trophy → no sailing → the favorable weather condition failed → rain and fog.

### Other course proof patterns

**Distribution and resolution.** Given (p ∧ q) ∨ r and r → s, prove p ∨ s:

1. Distribute the first premise to (p ∨ r) ∧ (q ∨ r).
2. Simplify to p ∨ r.
3. Rewrite r → s as ¬r ∨ s.
4. Resolve on r to obtain p ∨ s.

**Contraposition and chaining.** Given p → q, ¬p → r, r → s, prove ¬q → s. Contrapose the first premise to ¬q → ¬p, then apply HS twice. The teacher illustrates this with sending an email, finishing a program, sleeping early and waking refreshed.

**A fact followed by a chain.** Given ¬p ∧ q, r → p, ¬r → s, s → t, prove t. Simplify to ¬p; use MT with r → p to get ¬r; use MP twice to reach s and then t. This is the swimming, canoe trip and sunset example.

**Repeat a familiar structure.** The party/band/refund problem has (¬p ∨ ¬q) → (r ∧ s), r → t, ¬t and concludes p. It is the same structure as the sailing proof: identify the structure before doing new algebra.

**A short final exercise.** From p → q and ¬(q ∨ r), derive ¬q by De Morgan and simplification, then ¬p by MT.

**Checking routine:** every inferred line must cite an available premise or earlier result; every universal claim about argument validity needs a valid rule chain or a complete truth-table test. A plausible story is not a proof.

*Source-label note:* some E/I labels in the distribution/resolution example are swapped. Simplification is inference; rewriting an implication as a disjunction is equivalence. The mathematical steps remain valid.
