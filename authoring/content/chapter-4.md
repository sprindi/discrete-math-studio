# Chapter 4 · Relations

A relation specifies which ordered pairs are allowed. The same relation can be written as a pair list, a 0–1 matrix, or a directed graph. Move between these forms to make a problem easier. This chapter's six documents contain 145 slides.

**Course convention:** R∘S means **first R, then S**, read left to right. This differs from the usual convention for composing functions. Every composition calculation in this guide and its tools follows the course.

## 4.1 Cartesian products and relations

*Reviewed source: Dmath4-1.pdf, 19 pages.*

### Pairs keep their order

(a,b)=(c,d) exactly when a=c and b=d. Unlike {a,b}, an ordered pair records first and second positions. **A×B={(a,b): a∈A, b∈B}**. If |A|=m, |B|=n are finite, |A×B|=mn. An n-tuple extends this idea to n coordinates.

For A={1,2}, B={a,b,c}, A×B={(1,a),(1,b),(1,c),(2,a),(2,b),(2,c)}. B×A reverses the coordinate roles; equal cardinality does not mean equal sets. {0,1}×{2,3}×{a,b} has 8 triples.

A **binary relation from A to B** is any subset R⊆A×B. A relation **on A** is a subset of A×A. Not every possible pair must belong. For finite m,n, there are 2^(mn) possible relations, because each of the mn pairs can be included independently; this count is a derived consequence of power sets.

### Build pairs by testing the definition

Source A={0,2,3,4}, B={0,1,2,3}:

- a=b gives {(0,0),(2,2),(3,3)}.
- a+b=4 gives {(2,2),(3,1),(4,0)}.
- a>b gives (2,0),(2,1),(3,0),(3,1),(3,2),(4,0),(4,1),(4,2),(4,3).
- For a|b, the course excludes a=0 as a divisor. The correct pairs are **(2,0),(2,2),(3,0),(3,3),(4,0)**. The source list omits the three nonzero divisors of 0. A nonzero integer a divides 0 because 0=a·0.

Relations are sets, so union, intersection and difference operate on their ordered pairs. Their inverse flips every pair: **R⁻¹={(b,a):(a,b)∈R}**. Consequently (R⁻¹)⁻¹=R, and (R∪S)⁻¹=R⁻¹∪S⁻¹. An inverse relation always exists; it need not be a function.

### Compose by joining the middle coordinate

In this course, **R∘S={(x,z): ∃y((x,y)∈R ∧ (y,z)∈S)}**. Follow an R edge and then an S edge, record only the endpoints, and remove duplicate pairs.

Source R={(a,a),(a,b),(b,d)}, S={(a,d),(b,c),(b,d),(c,b)}:

1. R's a→a followed by S's a→d gives (a,d).
2. R's a→b followed by S's b→c or b→d gives (a,c),(a,d).
3. R's b→d cannot continue because S has no edge starting at d.
4. Thus **R∘S={(a,d),(a,c)}**. In reverse order **S∘R={(c,d)}**, so composition is not generally commutative.

**Powers:** R²=R∘R, R³=R²∘R, and so on. Rᵏ describes walks of exactly k steps in its digraph. A parent relation squared gives the grandparent relation. For R={(1,1),(2,1),(3,2),(4,3)}, R²={(1,1),(2,1),(3,1),(4,2)} and R³=R⁴={(1,1),(2,1),(3,1),(4,1)}.

## 4.2 Matrices and directed graphs

*Reviewed source: Dmath4-2.pdf, 31 pages.*

### Matrix dictionary

Fix an order A=(a₁,…,aₘ), B=(b₁,…,bₙ). The **relation matrix** M has m rows, n columns, and **Mᵢⱼ=1 iff (aᵢ,bⱼ)∈R**, otherwise 0. Rows are sources; columns are destinations. Changing the ordering changes the displayed matrix. For a relation on one set, use the same order for rows and columns.

For a>b on A={1,2,3}, B={1,2}, the rows are **[0,0], [1,0], [1,1]**. Decode a matrix by writing one ordered pair for every 1. A transpose exchanges rows and columns, so **M(R⁻¹)=M(R)ᵀ**, with the domain and codomain orders swapped.

| Relation operation | Matrix operation |
|---|---|
| R∪S | Entrywise OR |
| R∩S | Entrywise AND |
| R⁻¹ | Transpose |
| Identity I_A={(a,a):a∈A} | Diagonal ones, other entries zero |
| R∘S, course order | Boolean product M(R)⊙M(S) |
| Rᵏ | kth Boolean power |

A square matrix is symmetric when M=Mᵀ. A rectangular relation matrix is legitimate but cannot be tested as a relation on a single set without clarifying the underlying sets.

### Boolean multiplication answers “is there a route?”

For an m×k matrix A and k×n matrix B, **Cᵢⱼ=∨ₜ(Aᵢₜ∧Bₜⱼ)**. Match a row of A with a column of B, AND corresponding entries, then OR the results. The output is 0 or 1 even when several routes exist. The inner dimensions must agree.

Worked source A=[[1,1,0],[0,0,1],[1,0,1]], B=[[1,0],[1,1],[0,1]]. The first output entry is (1∧1)∨(1∧1)∨(0∧0)=1, not 2. The full product is **[[1,1],[0,1],[1,1]]**.

For R=[[1,0,1],[1,1,0],[0,0,0]] and S=[[0,1,0],[0,0,1],[1,0,1]], the course-order composition matrix is **[[1,1,1],[0,1,1],[0,0,0]]**.

### Digraph dictionary

A vertex represents each set element. Draw a→b exactly when (a,b)∈R. A pair (a,a) becomes a loop. Reverse all arrows to draw R⁻¹. An isolated vertex remains part of the declared set even if it participates in no pair.

For a matrix-to-graph answer, label vertices first, draw loops from diagonal 1s, then draw off-diagonal arrows row to column. When reading a picture, crossings are not extra vertices unless marked as junctions.

**Source exercise supplied solution:** the final triangle diagram has loop 1 and cycle 2→1→3→2, giving {(1,1),(2,1),(1,3),(3,2)}. Do not interpret arrow direction from the position of a curve alone; inspect its arrowhead.

## 4.3 Properties of relations

*Reviewed source: Dmath4-3.pdf, 21 pages.*

### Use exact tests, not visual impressions

| Property on A | Pair test | Matrix/graph test |
|---|---|---|
| Reflexive | Every a satisfies aRa | Every diagonal entry 1; all loops present |
| Irreflexive | No a satisfies aRa | Every diagonal entry 0; no loops |
| Symmetric | aRb ⇒ bRa | M=Mᵀ; every arrow reversed too |
| Antisymmetric | aRb and bRa ⇒ a=b | No opposite off-diagonal 1s; loops allowed |
| Asymmetric | aRb ⇒ not bRa | No opposite pair, including loops |
| Transitive | aRb and bRc ⇒ aRc | Boolean M²≤M entrywise; every two-step route has a shortcut |

A partly filled diagonal is neither reflexive nor irreflexive. **Antisymmetric is not the negation of symmetric.** The identity relation is both symmetric and antisymmetric. The empty relation is symmetric, antisymmetric, asymmetric and transitive by vacuity; it is not reflexive on a nonempty set.

Asymmetry implies both antisymmetry and irreflexivity, and conversely those two together imply asymmetry. Antisymmetry forbids reciprocal pairs of distinct elements, not all directed cycles. A three-cycle has no reciprocal pair and is antisymmetric, although it is not transitive.

### Prove or disprove with witnesses

To disprove symmetry, exhibit (a,b)∈R with (b,a)∉R. To disprove antisymmetry, exhibit distinct a,b with both pairs present. To disprove transitivity, give a,b,c with (a,b),(b,c) present and (a,c) absent. To disprove reflexivity, identify one missing loop. Do not merely state “the picture looks wrong.”

**Examples from the course:** divisibility on Z⁺ is reflexive and transitive, not symmetric, and antisymmetric because a|b and b|a for positive integers force a=b. On all integers, the course's exclusion of 0 as a divisor means reflexivity fails at 0; allowing negative numbers also destroys antisymmetry since 2|−2 and −2|2. “Has a higher GPA than” is asymmetric and irreflexive.

**Source corrections:** slides 11 and 15 label examples asymmetric even though each contains both a→b and b→a. Slide 21 labels a graph asymmetric despite loops and a reciprocal b,c pair. Those examples are not asymmetric. The slide-21 graph is reflexive, neither symmetric nor antisymmetric, and not transitive. Use the definitions above to justify corrections.

**Worked counterexample:** R={(1,2),(2,3),(3,1)} is irreflexive and asymmetric, but not transitive: 1R2 and 2R3 require 1R3, which is absent.

## 4.4 Closures and Warshall's algorithm

*Reviewed source: Dmath4-4.pdf, 27 pages.*

A **closure** is the smallest relation containing R that has the desired property. You may add pairs, not remove originals. To justify minimality, explain why every added pair is forced in any superrelation with that property.

- Reflexive closure **r(R)=R∪I_A**: add missing loops.
- Symmetric closure **s(R)=R∪R⁻¹**: add missing reverse arrows.
- Transitive closure **t(R)=R⁺=R∪R²∪R³∪…**: add all pairs connected by a positive-length walk.

**R⁺ does not automatically contain every loop.** A loop appears when a positive-length return route exists, or when it was originally present. Reflexive-transitive closure is the different relation **R*=I_A∪R⁺**. For a finite set of n vertices, Boolean powers 1 through n suffice for R⁺; length n may be necessary to close a cycle returning to its start.

### Source example, solved in all three ways

Let A={1,2,3,4,5}, R={(1,2),(2,3),(3,5),(4,5),(5,3),(5,5)}.

- r adds (1,1),(2,2),(3,3),(4,4).
- s adds (2,1),(3,2),(5,4). The reverse of 3→5 is already present.
- t is **{(1,2),(1,3),(1,5),(2,3),(2,5),(3,3),(3,5),(4,3),(4,5),(5,3),(5,5)}**. The 3↔5 cycle forces the loop at 3. No path returns to 1,2 or4, so their loops are absent.

For R={(a,b),(b,a),(c,c)}, the symmetric closure is already R; reflexive and transitive closures both equal {(a,a),(a,b),(b,a),(b,b),(c,c)}.

### Warshall: permit one more intermediate vertex

Start W=M(R). For k=1,…,n, and all i,j, replace **Wᵢⱼ by Wᵢⱼ∨(Wᵢₖ∧Wₖⱼ)**. Keep k as the outer loop. After stage k, the matrix records routes whose internal vertices come from the first k vertices. In-place updates are valid for this Boolean reachability algorithm.

For R={1→2,2→4,4→1,4→3}, the final rows are **[1,1,1,1], [1,1,1,1], [0,0,0,0], [1,1,1,1]**. Vertex 3 has no outgoing route, so even its diagonal stays zero. Use the relation laboratory to watch the intermediate matrices.

**Exam method:** calculate reflexive and symmetric closures directly. For transitive closure use reachability by hand on small graphs, Boolean powers if requested, or a clearly staged Warshall table. Preserve every original pair and check the result is actually transitive.

## 4.5 Equivalence relations and partitions

*Reviewed source: Dmath4-5(1).pdf, 20 pages.*

An **equivalence relation** is reflexive, symmetric and transitive. Think “the same under a chosen criterion”: same high school, same age, congruence modulo m. Friendship usually fails these requirements, particularly reflexivity and transitivity.

For **a≡b (mod m)**, m>1, the condition is m|(a−b). Reflexivity follows from a−a=0. Symmetry follows by negating the multiple of m. Transitivity follows by adding a−b and b−c. Write all three steps when asked to prove equivalence.

### Classes group equivalent objects

The equivalence class **[a]_R={s∈A:aRs}** contains all objects equivalent to a. For an equivalence relation:

- a∈[a].
- aRb iff [a]=[b].
- Two classes are equal or disjoint.
- The distinct classes cover A.

The **quotient set A/R** is the set of distinct classes, not the union written as one flat set. Source A={1,…,8}, relation congruence mod3: [1]={1,4,7}, [2]={2,5,8}, [3]={3,6}; [4]=[1]. Thus **A/R={{1,4,7},{2,5,8},{3,6}}**. It has 3 elements, each itself a set. The relation has 3²+3²+2²=22 pairs.

### A partition and an equivalence relation determine each other

A **partition** consists of nonempty, pairwise disjoint subsets whose union is A. The blocks must contain only elements of A and omit none. Given blocks A₁,…,Aₖ, define **R=⋃ᵢ(Aᵢ×Aᵢ)**: two elements are related precisely when they lie in the same block. This is an equivalence relation, and its classes are exactly the blocks.

For A={a,b,c}, there are five partitions: {{a,b,c}}, {{a},{b,c}}, {{a,c},{b}}, {{a,b},{c}}, {{a},{b},{c}}. Their induced relations have respectively 9,5,5,5,3 pairs. For {{a},{b,c}}, R={(a,a),(b,b),(b,c),(c,b),(c,c)}.

In the source partition exercise on {a,b,c,d,e,f,g}, {{a,b,c},{d,f},{e,g}} is valid. A collection containing h is invalid; overlapping b,c blocks are invalid; {{a,c,e},{d,f,g}} is invalid because b is missing.

**Exam method:** test the three equivalence properties first. Then collect each unused element's class, discard duplicate classes, verify disjointness and coverage, and distinguish |A/R| from |R|.

## 4.6 Partial orderings and Hasse diagrams

*Reviewed source: Dmath4-6(2).pdf, 27 pages.*

A **partial order** is reflexive, antisymmetric and transitive. A set with such a relation is a **poset (S,≼)**. Examples: ≤ or ≥ on integers, divisibility on positive integers, ⊆ on a power set. Strict “older than” is not a partial order in this definition because it is not reflexive.

Elements a,b are comparable when a≼b or b≼a. A partial order need not compare every pair. Here ≺ means ≼ together with inequality.

### Draw only cover relations

A Hasse diagram encodes a finite poset by removing every loop and every transitive shortcut, placing smaller elements below larger ones, and omitting arrowheads. An edge x–y going upward means **y covers x**: x≺y with no z strictly between them. Recover the order by upward paths and implicit equality loops.

For divisibility on {1,2,3,4,6,8,12,24}, the cover edges are 1–2,1–3,2–4,2–6,3–6,4–8,4–12,6–12,8–24,12–24. Do not draw 1–24: it is implied by intermediate chains. For P({a,b,c}) under inclusion, place ∅ at the bottom, singletons above it, pairs next, and {a,b,c} on top; join sets differing by one added element.

**Source clarification:** incomparable elements do not have to be drawn at the same height. Absence of an upward path determines incomparability. Height alone is not a numerical order.

### Eight terms, with different quantifiers

| Term | Test |
|---|---|
| Maximal element of S | No strictly larger element of S |
| Minimal element of S | No strictly smaller element of S |
| Greatest element of S | Every element of S lies below or equals it |
| Least element of S | It lies below or equals every element of S |
| Upper bound of B⊆S | An element u∈S with b≼u for every b∈B |
| Lower bound of B⊆S | An element l∈S with l≼b for every b∈B |
| lub(B) | The least element among all upper bounds |
| glb(B) | The greatest element among all lower bounds |

Several maximal or minimal elements can exist. A greatest or least element, when it exists, is unique. Being maximal does not imply being greatest. Bounds and lub/glb are sought in the **ambient poset S**, and may lie outside B. Extremal elements of an induced subset are sought within that subset.

### Source examples

On {2,4,5,10,12,20,25} under divisibility, minimal elements are 2,5; maximal elements are 12,20,25. There is neither a least nor a greatest element.

For ambient S={1,…,12} under divisibility:

| Subset | Minimal / maximal inside subset | Least / greatest inside subset | Upper / lower bounds in S | lub / glb in S |
|---|---|---|---|---|
| B={2,4,6} | {2} / {4,6} | 2 / none | {12} / {1,2} | 12 / 2 |
| C={4,6,9} | {4,6,9} / {4,6,9} | none / none | ∅ / {1} | none / 1 |
| D={1,2,5,10} | {1} / {10} | 1 / 10 | {10} / {1} | 10 / 1 |

For divisibility, common multiples suggest upper bounds and common divisors lower bounds, but **the candidate must belong to S**. For C the integer lcm is 36, outside S, so there is no upper bound in this poset. For B, lcm=12 gives lub, gcd=2 gives glb. For subset inclusion in a power set, union gives lub and intersection glb.

**Exam method:** write the ambient set, list all candidates satisfying every comparison, then compare candidates to select lub or glb. Never pick the numerically largest-looking vertex unless the relation is the ordinary numerical order.
