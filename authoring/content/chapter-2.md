# Chapter 2 · Predicate logic

A propositional letter hides the inside of a statement. Predicate logic exposes **who**, **what property**, and **how many**. Keep three things visible in every solution: the domain, each predicate's meaning, and each quantifier's scope. This chapter's four documents contain 75 slides.

## 2.1 Predicates and quantifiers

*Reviewed source: Dmath2-1.pdf, 22 pages.*

### From a variable to a statement

A **predicate** P(x) describes a property of an input. P(x): x > 3 is not a closed proposition while x is free. With domain Z, P(2) is false and P(4) is true. A predicate can have several arguments: Q(x,y): x = y + 3 gives Q(1,2) false and Q(3,0) true. Argument order matters. “Beijing is the capital of China” is true; “Toronto is the capital of Canada” is false.

You can combine assigned predicates with propositional connectives. For P(x): x > 0, P(3)=T and P(−1)=F. Therefore P(3)∨P(−1)=T, their conjunction is F, the implication P(3)→P(−1) is F, and their biconditional is F.

### Two quantifiers

| Formula | Meaning | How to prove it true | How to prove it false |
|---|---|---|---|
| ∀x P(x) | Every domain member has P | Show P for an arbitrary member | Give one counterexample |
| ∃x P(x) | At least one member has P | Give one witness | Show every member fails P |

The domain changes the claim. ∀x(x > 0) is false over Z, but true over Z⁺. ∃x(x < 0) is false over Z⁺. A witness must actually belong to the specified domain. Universals over an empty domain are vacuously true and existentials false; the course's main examples use nonempty domains.

**Finite expansion.** On D={1,2,3}, ∀x P(x) becomes P(1)∧P(2)∧P(3), and ∃x P(x) becomes P(1)∨P(2)∨P(3). For x² < 10 the universal is true on {1,2,3}, false on {1,2,3,4}, with counterexample 4. For x² > 10 the existential is true on {1,2,3,4}, witnessed by 4, but false on {1,2,3}.

### Translate “all” and “some” correctly

If the domain is all people, let C(x)=comedian and F(x)=funny:

- All comedians are funny: **∀x(C(x)→F(x))**.
- Some comedian is funny: **∃x(C(x)∧F(x))**.
- Some comedian is not funny: **∃x(C(x)∧¬F(x))**.
- No comedian is funny: **∀x(C(x)→¬F(x))**.

Universal restriction normally uses implication. Existential restriction normally uses conjunction. ∃x(C(x)→F(x)) can be satisfied by a noncomedian, so it does not assert that a funny comedian exists. ∀x(C(x)∧F(x)) incorrectly asserts that everybody is a comedian.

### Worked source exercise and correction

Over the integers let P(x): x < 3, Q(x): x+1 is odd, R(x): x > 0. For **P(3)∨Q(3)∨¬R(3)**:

1. 3 < 3 is false.
2. 3+1=4 is not odd, so Q(3) is false.
3. 3 > 0 is true, so ¬R(3) is false.
4. F∨F∨F is **false**. Slide 10 prints true; use the corrected evaluation.

The other source evaluations are ¬(P(−4)∨Q(−3))=F, (P(2)∧Q(2))→R(2)=T, and P(0)→(¬Q(−1)↔R(1))=T.

**Exam method:** write the domain first, substitute the values next, evaluate arithmetic before logic, and evaluate negations before binary connectives.

## 2.2 WFF, scope, and nested quantifiers

*Reviewed source: Dmath2-2.pdf, 23 pages.*

### Terms, atoms, formulas

A **term** names an object: a variable x, a constant a, or a function applied to terms such as f(x,g(a)). An **atomic formula** applies a predicate to the right number of terms, for example P(f(x),a). Build larger formulas with ¬, ∧, ∨, →, ↔, ∀ and ∃. Parentheses must match, functions and predicates must have their declared number of arguments, and quantifiers bind variables rather than arbitrary expressions.

A WFF can have free variables. **Well formed** means legal syntax; **closed** means no free variable occurrences. A closed formula has a truth value once its domain and symbols are interpreted. Assigning a value to a free variable does not make that occurrence syntactically bound.

### Scope is local

A quantifier applies to its immediately following formula, including parentheses that delimit that formula. In **∃x F(x) ∧ G(x)**, the x in F(x) is bound and the x in G(x) is free. In **∃x(F(x)∧G(x))**, both are bound. One symbol may therefore have bound and free occurrences in a single larger formula.

The source example **∀x(F(x)→∃y F(y)∧H(x,y))** leaves y in H free under the stated tight quantifier precedence: the inner ∃y covers only F(y). If the intended scope includes H, write **∀x(F(x)→∃y(F(y)∧H(x,y)))**. Never use the English intention to silently enlarge a written scope.

### Quantifier order expresses dependency

| Pattern | What must exist |
|---|---|
| ∀x∀y P(x,y) | Every pair works |
| ∀x∃y P(x,y) | Each x gets a possibly different witness y |
| ∃x∀y P(x,y) | One fixed x works for every y |
| ∃x∃y P(x,y) | At least one pair works |

Like quantifiers commute: ∀x∀y and ∀y∀x give the same requirement; likewise two existentials. Mixed quantifiers generally do not commute. **∃y∀x P(x,y) implies ∀x∃y P(x,y)**, but the reverse can fail.

**Source example: additive inverses over R.** ∀x∃y(x+y=0) is true: choose y=−x after x is known. ∃y∀x(x+y=0) is false: x=0 would force y=0, while x=1 would force y=−1. No single y serves both.

**Source example: P(x,y) means xy=0 over R.** ∀x∀y P is false (1,1); ∀x∃y P is true (always choose y=0); ∃x∀y P is true (choose x=0); ∃x∃y P is true (choose 0,0). The operation on slide 21 is multiplication, not subtraction.

### Translate relations between people

For a domain consisting only of students, “Every student has a computer or has a friend with one” becomes **∀x(C(x)∨∃y(F(x,y)∧C(y)))**, where F(x,y) means x is friends with y. If the domain is all people and the friend must also be a student, include the necessary student restrictions explicitly. State whether friendship is assumed symmetric; do not infer properties absent from a definition.

Other course translations: all lions are fierce is ∀x(L(x)→F(x)); some lions do not drink coffee is ∃x(L(x)∧¬C(x)).

### Advanced source example: limits

The usual claim that f has limit L at a has dependency pattern **∀ε>0 ∃δ>0 ∀x**. Its condition is **0<|x−a|<δ → |f(x)−L|<ε**. δ may depend on ε; it must work for every permitted x. The source omits 0<|x−a|; including it gives the usual punctured-neighborhood definition, which does not constrain the value f(a). This is a scope and dependency example, rather than a new calculus unit.

**Exam method:** translate one quantifier at a time; mark which earlier variables each witness may depend on. To disprove “one y for all x,” find two x values that force incompatible choices.

## 2.3 Equivalent formulas and negation

*Reviewed source: Dmath2-3.pdf, 10 pages.*

### Push negation through quantifiers

**¬∀x P(x) ≡ ∃x ¬P(x)** and **¬∃x P(x) ≡ ∀x ¬P(x)**. Each time negation passes a quantifier, it swaps ∀ with ∃. Preserve quantifier order, then negate the inner formula using propositional laws.

| Original | Negation |
|---|---|
| Every student passed | Some student did not pass |
| Some student passed | No student passed |
| ∀x∃y P(x,y) | ∃x∀y ¬P(x,y) |
| ∃x∀y P(x,y) | ∀x∃y ¬P(x,y) |

Do not negate “all” as “all not”: the failure of everyone passing requires only one failure, not universal failure.

### Worked source transformations

1. **¬∃x(P(x)∨Q(x))** ≡ ∀x¬(P(x)∨Q(x)) ≡ **∀x(¬P(x)∧¬Q(x))**.
2. **¬∀x(P(x)→Q(x))** ≡ ∃x¬(P(x)→Q(x)) ≡ **∃x(P(x)∧¬Q(x))**. A counterexample must satisfy the hypothesis and fail the conclusion.
3. **¬∀y∀x(C(x,y)∨F(x,y))** ≡ **∃y∃x(¬C(x,y)∧¬F(x,y))**.
4. ¬∀x(x²−4≥0) ≡ ∃x(x²−4<0). Whether the result is true depends on the domain.
5. Over positive integers, ¬∃x(x²=0) ≡ ∀x(x²≠0), which is true.

For the fixed-limit statement in 2.2, its negation is **∃ε>0 ∀δ>0 ∃x(0<|x−a|<δ ∧ |f(x)−L|≥ε)**. Note the conjunction after negating the implication. This says **L is not the limit**, not automatically that no limit exists; another candidate value could be a limit.

**Quick check:** swapping quantifiers without negating the predicate is incomplete. Negating A→B produces A∧¬B, not ¬A→¬B.

## 2.4 Inference in predicate calculus

*Reviewed source: Dmath2-4.pdf, 20 pages.*

### Four rules and their restrictions

| Rule | Pattern | Restriction that matters |
|---|---|---|
| Universal instantiation (UI) | ∀x P(x) ⇒ P(c) | c must denote a domain member; substitution must avoid variable capture |
| Universal generalization (UG) | P(c) ⇒ ∀x P(x) | c is arbitrary, with no special assumption restricting it |
| Existential instantiation (EI) | ∃x P(x) ⇒ P(c) in a proof | Use a fresh name for an unspecified witness |
| Existential generalization (EG) | P(c) ⇒ ∃x P(x) | A valid particular case suffices |

EI does not let you choose your favorite known object. If someone won a prize, calling that person c does not establish that Alice won. Two independent existential claims may require different witnesses. Likewise, an existential witness is not arbitrary enough for UG.

### Worked source proof: a shared witness

Premises: ∀x(F(x)→G(x)) and ∃x(F(x)∧H(x)). Prove ∃x(G(x)∧H(x)).

| Line | Statement | Reason |
|---|---|---|
| 1 | ∀x(F(x)→G(x)) | Premise |
| 2 | ∃x(F(x)∧H(x)) | Premise |
| 3 | F(c)∧H(c) | EI from 2, c fresh |
| 4 | F(c)→G(c) | UI from 1 at that same c |
| 5 | F(c) | Simplification of 3 |
| 6 | H(c) | Simplification of 3 |
| 7 | G(c) | Modus ponens, 4 and 5 |
| 8 | G(c)∧H(c) | Conjunction, 7 and 6 |
| 9 | ∃x(G(x)∧H(x)) | EG from 8 |

This also solves the movie/coal-miner example by renaming predicates: every S is W, some S is C, hence some W is C. The witness must remain the same throughout the conjunction.

The teacher recommends EI before UI in this pattern. The underlying requirement is **freshness**, rather than an absolute ban on UI first: instantiate the universal at whichever fresh witness EI subsequently introduces.

### Universal conclusions need an arbitrary object

To prove ∀x(M(x)→G(x)) from ∀x(M(x)→R(x)) and ∀x(R(x)→G(x)):

1. Let c be arbitrary.
2. UI gives M(c)→R(c) and R(c)→G(c).
3. Hypothetical syllogism gives M(c)→G(c).
4. UG gives ∀x(M(x)→G(x)).

The source's mice/rodents proof has a line-reference typo; the syllogism uses the two implications, not an unrelated line. For Socrates, instantiate ∀x(Human(x)→Mortal(x)) at Socrates, then apply modus ponens using Human(Socrates).

**Before submitting a proof:** number lines, cite the rule and earlier lines, use fresh EI names, keep existential witnesses consistent, and check arbitrariness before UG. A valid conclusion is supported by the stated premises; it need not describe the real world if a premise is false.
