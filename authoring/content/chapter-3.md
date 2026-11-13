# Chapter 3 · Set theory

Sets let you describe collections precisely. Membership corresponds to truth; set operations correspond to logical connectives. The most useful exam habit is to distinguish an **element**, a **subset**, and a **set of subsets** before manipulating any symbols. The three lesson documents contain 53 slides.

## 3.1 Sets, subsets, and power sets

*Reviewed source: Dmath3-1.pdf, 18 pages.*

### Describe a collection

A set is an unordered collection of distinct objects. **x∈A** says x is an element; **x∉A** says it is not. The roster {2,3,5} is also the set of primes in [1,7), or the solution set of x³−10x²+31x−30=0. Different descriptions can name the same set.

Order and repetitions do not matter: {1,2,2}={2,1}. The empty set ∅ has no elements and cardinality 0. A universal set U supplies the context for complements. In a Venn diagram, draw U as a rectangle and sets as regions within it.

| Notation | Meaning |
|---|---|
| N | {0,1,2,…} in this course |
| Z | Integers |
| Z⁺ | Positive integers {1,2,…} |
| Q | Ratios a/b of integers with b≠0 |
| R, R⁺, C | Reals, positive reals, complex numbers |
| [a,b] | a≤x≤b |
| (a,b), [a,b), (a,b] | Omit both endpoints, the right, or the left respectively |

Write the domain when using set-builder notation. {x∈Z: x²<4}={−1,0,1}, whereas the analogous real set is the interval (−2,2).

### Membership and inclusion answer different questions

**A⊆B** means every member of A is also a member of B: ∀x(x∈A→x∈B). A proper subset, written A⊊B here, additionally has A≠B. To disprove inclusion, give a witness x∈A with x∉B. To prove A=B, prove both inclusions, or show membership is equivalent for an arbitrary object.

**∅⊆A for every set A**, including A=∅. The defining implication has no counterexample. But **∅∈A** is true only when A contains the empty set as an element.

For A={∅}, |A|=1, ∅∈A is true and ∅⊆A is true. A is not empty. For B={{1,2}}, {1,2}∈B, but 1∉B. Draw one box for each brace level if necessary.

### Power sets

The **power set P(A)** is the set of all subsets of A. If |A|=n is finite, **|P(A)|=2ⁿ**, since each element is either included or excluded independently.

For A={a,b}, P(A)={∅,{a},{b},{a,b}}. For A={0,1,2}, list by size: one empty subset, three singletons, three pairs, and the whole set, giving 1+3+3+1=8.

**Source nested-brace exercise.** If A={∅}, then P(A)={∅,{∅}}. Consequently

**P(P(A))={∅,{∅},{{∅}},{∅,{∅}}}**, with 4 elements.

Also P(∅)={∅}, with one element. A common error is to turn “no elements” into “no subsets”; even ∅ has the empty subset.

**Exam checks:** x∈P(A) is equivalent to x⊆A. Count distinct outermost members, not all objects visible inside nested braces.

## 3.2 Set operations and identities

*Reviewed source: Dmath3-2.pdf, 21 pages.*

### Translate membership into logic

| Operation | Membership condition | Picture to imagine |
|---|---|---|
| A∪B | x∈A OR x∈B | Either region, including overlap |
| A∩B | x∈A AND x∈B | Overlap only |
| A∖B | x∈A AND x∉B | A with B removed |
| Aᶜ=U∖A | x∉A, with x∈U | Everything in U outside A |
| A△B | Exactly one of x∈A and x∈B | Both outside parts, without overlap |

Disjoint means A∩B=∅. It does not require either set to be empty. A∖B is generally different from B∖A. Symmetric difference is commutative and equals (A∖B)∪(B∖A)=(A∪B)∖(A∩B).

**Worked source example.** U={1,…,10}, A={1,2,3,4,5}, B={3,4,5,6,7}, C={7,8,9}. Then A∪B={1,…,7}, A∩B={3,4,5}, A∖B={1,2}, B∖A={6,7}, A△B={1,2,6,7}, Aᶜ={6,7,8,9,10}. A∩C=∅ and A∪C={1,2,3,4,5,7,8,9}. Do not fill the missing 6 into a roster merely because the entries look nearly consecutive.

### The law table to recognize

| Name | Identity and its dual |
|---|---|
| Identity | A∪∅=A; A∩U=A |
| Domination | A∪U=U; A∩∅=∅ |
| Idempotence | A∪A=A; A∩A=A |
| Complement | A∪Aᶜ=U; A∩Aᶜ=∅; (Aᶜ)ᶜ=A |
| Commutativity | A∪B=B∪A; A∩B=B∩A |
| Associativity | (A∪B)∪C=A∪(B∪C); similarly ∩ |
| Distributivity | A∩(B∪C)=(A∩B)∪(A∩C); A∪(B∩C)=(A∪B)∩(A∪C) |
| De Morgan | (A∪B)ᶜ=Aᶜ∩Bᶜ; (A∩B)ᶜ=Aᶜ∪Bᶜ |
| Absorption | A∪(A∩B)=A; A∩(A∪B)=A |

Complements are always relative to the same U. The logic dictionary is ∪↔∨, ∩↔∧, complement↔¬, ∅↔false, U↔true.

### Three proof methods

**Membership proof:** choose arbitrary x. To prove (A∩B)ᶜ=Aᶜ∪Bᶜ, write x∈(A∩B)ᶜ iff ¬(x∈A∧x∈B) iff x∉A∨x∉B iff x∈Aᶜ∪Bᶜ. The equivalences hold for every x, so the sets are equal.

**Law chain:** (A∪(B∩C))ᶜ=Aᶜ∩(B∩C)ᶜ=Aᶜ∩(Bᶜ∪Cᶜ)=(Cᶜ∪Bᶜ)∩Aᶜ. Cite De Morgan twice, then commutativity.

**Membership table:** assign 0/1 to membership in A,B,C and compare both sides for all 8 rows. For A∩(B∪C), both sides have column 0,0,0,0,0,1,1,1 in order 000 through 111. This is the same verification mechanism as a three-variable truth table.

### Traps from the source exercises

A∖B=A does **not** imply B=∅: A={1}, B={2} is a counterexample. The correct condition is A∩B=∅. A∖B=∅ means A⊆B, not necessarily A=B. A∩B=B means B⊆A, not A=U. The identity A∖(B∪C)=(A∖B)∩(A∖C) is true by De Morgan. In ordinary sets, A∈{{A}} is false while {A}∈{{A}} is true; do not discard a brace layer.

**Exam method:** rewrite a complicated difference as intersection with a complement, then use De Morgan and distributivity. For a claimed implication, look for a tiny counterexample before trying a long proof.

## 3.3 Inclusion–exclusion

*Reviewed source: Dmath3-3.pdf, 14 pages.*

### Correct for repeated counting

For finite sets, **|A∪B|=|A|+|B|−|A∩B|**. An element in the overlap was counted twice in the sum, so subtract it once. “Neither” in a specified universe has count **|U|−|A∪B|**.

Source example: 48 students, 15 like football, 25 basketball, 8 both. At least one=15+25−8=32. Neither=48−32=16. Football only=7, basketball only=17, exactly one=24. Pair counts include those who belong to both; do not subtract them twice when computing a union.

For three sets:

**|A∪B∪C|=|A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C|.**

An element in all three contributes 3−3+1=1. The final triple term repairs the over-subtraction. For any finite number of sets, add all single-set sizes, subtract all pair intersections, add all triple intersections, and continue with alternating signs. Every distinct nonempty choice of sets appears once.

### Work from the center outward

The course's class has 272 students. Counts are Math 64, Computing 94, Finance 58; Math∩Finance 28, Math∩Computing 26, Computing∩Finance 22; all three 14.

1. Put **14** in the central region.
2. Exactly Math and Computing: 26−14=12. Exactly Math and Finance: 28−14=14. Exactly Computing and Finance: 22−14=8.
3. Math only: 64−12−14−14=24. Computing only: 94−12−8−14=60. Finance only: 58−14−8−14=22.
4. At least one: 64+94+58−28−26−22+14=**154**.
5. None: 272−154=**118**. Exactly one: 24+60+22=**106**. Exactly two: 12+14+8=**34**.

The source diagram's outside-region label 106 must not be used for “none”; 106 is the exactly-one total. The universe total checks: 106+34+14+118=272.

### Extra formulas, derived from the regions

Let S₁ be the sum of the three single-set sizes, S₂ the sum of the three pair-intersection sizes, and t the triple-intersection size. Then:

- Exactly one: **S₁−2S₂+3t**.
- Exactly two: **S₂−3t**.
- At least two: **S₂−2t**.
- At least one: **S₁−S₂+t**.

These are explanatory shortcuts derived from the same seven regions. Do not assume “two” means “exactly two” unless the wording says so.

### Source exercise solved

Among 300 people, vegetable preferences have single counts 70,80,60; pair counts 50,40,30; all three 20. The union is 70+80+60−50−40−30+20=**110**, so **190** like none. Exactly two=120−60=60; exactly one=210−240+60=30; check 30+60+20=110. This solution is supplied here for the slide's unanswered exercise.

**Exam method:** label the universe, draw the seven regions, fill the triple first, subtract it from pairs, then calculate single-only regions. Negative regions reveal inconsistent inputs or an interpretation error.
