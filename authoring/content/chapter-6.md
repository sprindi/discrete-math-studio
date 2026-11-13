# Chapter 6 · Algebraic structures

An algebraic structure combines a set with operations. An operation symbol alone does not determine its laws: first state the set, then the operation, then check the required properties. These four short lesson documents contain 26 rendered slides; the final viewer has six pages despite a stale one-page wrapper count.

## 6.1 Operations and operation tables

*Reviewed source: Dmath6-1.pdf, 9 pages.*

### Closure is part of the definition

An n-ary operation on S is a function Sⁿ→S. A unary operation takes one input, a binary operation two. The function must give exactly one result in S for every allowed input tuple. An algebraic structure consists of a nonempty set with one or more such operations.

Ordinary addition is a binary operation on Z⁺. Subtraction is not: 1−2 is outside Z⁺. On Zₙ={0,…,n−1}, define x⊕y=(x+y) mod n and x⊗y=xy mod n; reduction keeps results inside Zₙ. Matrix addition and multiplication operate on square real matrices of a fixed size. Power-set union, intersection and relative complement give another structure, with complement unary.

### Five properties to check separately

| Property | Required equation |
|---|---|
| Associative | (a*b)*c=a*(b*c) for every triple |
| Commutative | a*b=b*a for every pair |
| Identity e | e*a=a*e=a for every a |
| Inverse of a | a*b=b*a=e for some b∈S |
| Idempotent element a | a*a=a |

An operation is idempotent when every element is idempotent. Associativity changes brackets; commutativity changes order. One does not imply the other. Identity is a property of the whole operation; an inverse is relative to that identity. A one-sided identity or inverse must not be silently treated as two-sided.

### Read the source Cayley table

| * | a | b | c | d |
|---|---|---|---|---|
| a | a | b | c | d |
| b | b | a | d | c |
| c | c | d | b | a |
| d | d | c | a | b |

Read row first, column second: b*c=d. Row a and column a reproduce the headers, so a is the identity. Find a in both relevant positions to get a⁻¹=a, b⁻¹=b, c⁻¹=d, d⁻¹=c. The table is symmetric about the diagonal, so the operation is commutative.

Associativity requires more than symmetry or one occurrence of each symbol per row. For a four-element table, check all 4³=64 triples, or identify the operation with a known associative one. Here map a→0, b→2, c→1, d→3; the table becomes addition modulo4, proving associativity. For example (c*c)*d=b*d=c, and c*(c*d)=c*a=c, but one successful triple alone would not prove the universal law.

**Exam method:** check closure, then compare reflected table entries for commutativity, find a two-sided identity, find two-sided inverses, and justify associativity for every triple or by an established representation. A single counterexample disproves a universal property.

## 6.2 Semigroups and groups

*Reviewed source: Dmath6-2.pdf, 4 pages.*

A **semigroup** is a nonempty set with an associative binary operation. A nonempty subset T of a semigroup is a **subsemigroup** when it is closed under the inherited operation; associativity is inherited. (R,+) is a semigroup and (Q,+) a subsemigroup.

A **group** is a nonempty set with a binary operation that is associative, has a two-sided identity, and gives every element a two-sided inverse. Closure is already included in “binary operation on the set.” A group need not be commutative. A commutative group is called **abelian**, a term needed in the next lesson. A semigroup with an identity is commonly called a monoid; this is supplementary terminology.

| Structure | Associative and closed? | Identity | Inverses | Result |
|---|---|---|---|---|
| (Z,+) | Yes | 0 | −a | Abelian group |
| (Z⁺,+) | Yes | No identity inside Z⁺ | No additive inverses there | Semigroup, not group |
| (Z,×) | Yes | 1 | 2 has no inverse in Z | Semigroup with identity, not group |
| (R∖{0},×) | Yes | 1 | 1/a | Abelian group |
| (Mₙ(R),+) | Yes | Zero matrix | −A | Abelian group |
| (Mₙ(R),×), n≥2 | Yes | Identity matrix | Singular matrices fail | Not a group |

The matrix-addition group is the source's explicit group example. For a proposed group, a counterexample to closure or a single missing inverse is enough to disprove it. Checking only identity and inverses does not establish associativity for an arbitrary table.

Supplementary modular example: (Z₄,⊕) is a group, identity0, inverses0,3,2,1 respectively. But nonzero elements of Z₄ under multiplication do not form a group: 2·2=0 leaves that set, and 2 has no inverse.

## 6.3 Rings and fields

*Reviewed source: Dmath6-3(2).pdf, 7 pages.*

### A ring uses two operations with unequal requirements

A **ring (R,+,·)** has:

1. An abelian group under addition: closure, associativity, identity0, additive inverses, and commutativity.
2. An associative multiplication closed on R.
3. Both distributive laws: a·(b+c)=a·b+a·c and (a+b)·c=a·c+b·c.

The course's ring definition does **not** require multiplication to be commutative or to have an identity. Some books include an identity in the definition, so state which convention is being used. Do not require every nonzero ring element to have a multiplicative inverse.

A **field** is a ring whose nonzero elements form an abelian group under multiplication, with distinct 0 and1. Thus multiplication is commutative, a multiplicative identity exists, and every nonzero element has an inverse. Zero has no multiplicative inverse in a field.

### Classification with a reason

| Structure with ordinary or stated operations | Ring? | Field? | Decisive point |
|---|---|---|---|
| (Z,+,×) | Yes | No | 2 has no integer inverse |
| (Q,+,×) | Yes | Yes | Every nonzero rational has a rational reciprocal |
| (R,+,×) | Yes | Yes | Every nonzero real has a real reciprocal |
| (Z₅,⊕,⊗) | Yes | Yes | Nonzero residues all invertible |
| (Z₆,⊕,⊗) | Yes | No | 2·3=0 mod6, so 2 cannot be invertible |
| (Mₙ(R),+,·), n≥2 | Yes | No | Nonzero singular matrices lack inverses; multiplication need not commute |

**Source correction:** slide 6 says (Z,+,×) is both a ring and a field, and lesson6.4 repeats this. The field claim is false. An inverse of 2 would have to satisfy 2b=1 with b∈Z, which is impossible.

As an explanatory extension to the source's Zₙ ring example, Zₙ is a field exactly when n is prime (n≥2). If n=ab with 1<a,b<n, nonzero a,b multiply to 0 mod n. If n is prime, every nonzero residue is relatively prime to n, so Bézout's identity supplies a multiplicative inverse. In Z₅, 2⁻¹=3 because 2·3≡1; 4⁻¹=4.

### Source field example: Q(√3)

S={a+b√3:a,b∈Q} is closed under sum, difference and product. Multiplying two elements gives (ac+3bd)+(ad+bc)√3, still in S. For nonzero a+b√3:

**(a+b√3)⁻¹=(a−b√3)/(a²−3b²)**.

The denominator cannot be zero unless a=b=0: otherwise √3 would equal a rational ratio. The reciprocal again has rational coefficients. This explains the source's field claim rather than leaving it as a name to memorize.

**Exam method:** for a ring inspect addition, multiplication, and both distributive laws separately. For a field then inspect nonzero multiplicative inverses and commutativity. Keep additive inverse −a distinct from multiplicative inverse a⁻¹.

## 6.4 Boolean algebras

*Reviewed source: Dmath6-4.pdf, 6 actual rendered pages.*

### One pattern unites logic and sets

A Boolean algebra has two binary operations, written + and ·, a unary complement, and distinct constants0,1. Here + behaves like OR and · like AND, rather than ordinary numerical addition and multiplication.

The standard laws include commutativity and associativity of both operations; both distributive laws; identities a+0=a and a·1=a; and complements a+ā=1, a·ā=0. The slides list commutativity, distributivity, identities and complements; associativity is stated here explicitly as part of the standard working law system.

| Boolean notation | Truth-value model | Power-set model |
|---|---|---|
| a+b | p∨q | A∪B |
| a·b | p∧q | A∩B |
| ā | ¬p | U∖A |
| 0 | False | ∅ |
| 1 | True | U |

For the power-set model use a nonempty U if the constants must be distinct. The consistent tuple is **(P(U),∪,∩,complement,∅,U)**. The source lists ∩ before ∪ while keeping ∅ before U; if that is intended as + then · order, those positions are inconsistent. Swapping the binary operations also swaps the roles of the constants.

The source's “algebra of propositions” should be understood through truth values or by identifying logically equivalent formulas. Raw strings such as p∨q and q∨p are different written strings, although they denote the same Boolean value under every assignment.

### Simplify with laws already learned

Idempotence gives a+a=a and a·a=a. Absorption gives a+a·b=a and a·(a+b)=a. De Morgan gives complement(a+b)=ā·b̄ and complement(a·b)=ā+b̄. These are the same structural laws as Chapters1 and3.

Worked explanatory simplification: **a·b+a·b̄=a·(b+b̄)=a·1=a**. Cite distributivity, complement and identity. In logic this is (p∧q)∨(p∧¬q)≡p. In sets it is (A∩B)∪(A∩Bᶜ)=A. The dual identity a+b·b̄=(a+b)·(a+b̄)=a also follows by exchanging + with · and 0 with1.

**Do not confuse Boolean OR with mod2 addition.** In a Boolean algebra 1+1=1. In the field Z₂, 1⊕1=0. The two-element Boolean algebra and two-element field use different additions. A related Boolean ring uses XOR and AND, but that is an explanatory connection, not an extra section taught in the slides.

**Exam method:** write what each symbol means before calculating, choose the appropriate law table, cite one law per meaningful step, and test a proposed identity on 0/1 values if uncertain. A tiny counterexample is enough to reject a false universal identity.
