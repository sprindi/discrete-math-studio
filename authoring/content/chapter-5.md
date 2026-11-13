# Chapter 5 · Graphs

Graphs turn a situation into objects and connections. Decide what vertices and edges represent, whether direction matters, and whether loops or parallel edges are allowed before applying a theorem. The four lesson documents contain 72 slides.

## 5.1 Graph terminology and degrees

*Reviewed source: Dmath5-1(1).pdf, 24 pages.*

### Model the problem before calculating

A graph G=(V,E) has vertices V and edges E, with V nonempty in the course. Two vertices joined by an edge are **adjacent**; an edge and its endpoint are **incident**. A loop has identical endpoints. Parallel edges have the same endpoints; in directed graphs, parallel edges must also have the same direction.

The Königsberg model uses four land areas as vertices and seven bridges as edges. Its degrees are 3,3,3,5. The farmer/wolf/lamb/cabbage model instead uses **safe configurations** as vertices and legal crossings as edges. There are 16 binary configurations but only 10 safe ones; the person must operate the boat and cannot leave wolf with lamb or lamb with cabbage unattended on either bank.

A seven-crossing solution is: take lamb across; return alone; take wolf across; bring lamb back; take cabbage across; return alone; take lamb across. The graph method searches for a route between starting and finishing states, rather than treating the four travelers as the graph's four vertices.

### Match the course's graph conventions

| Type | Direction | Parallel edges permitted | Loops permitted |
|---|---|---|---|
| Simple graph | Undirected | No | No |
| Multigraph | Undirected | Yes | No in the course table |
| Pseudograph | Undirected | Yes | Yes |
| Simple directed graph | Directed | No | No in the course table |
| Directed multigraph | Directed | Yes | Yes |

Terminology varies across books. A directed graph with a loop is a digraph but is not “simple directed” under this table, even if no same-direction parallel edges occur. For classification, describe the actual features as well as the category name.

### Undirected degree counts endpoints

The degree d(v) counts incident edge ends. **A loop contributes 2**, while each ordinary edge contributes 1 to each endpoint. An isolated vertex has degree 0; a leaf or pendant vertex has degree 1.

**Handshaking lemma:** Σᵥd(v)=2|E|. Consequently the degree sum is even, and the number of odd-degree vertices is even. The latter does not say every degree is even.

Source example degrees 5,6,3,6 total 20, so there are 10 edges. In another exercise there are 10 edges, four vertices have degree 3, and all others have degree at most 2. The four vertices contribute 12 of the total 20. The remaining 8 degree units require at least 4 more vertices; hence **at least 8 vertices**. This bound is attainable: start with an 8-cycle and add two disjoint chords, giving four degree-3 vertices and four degree-2 vertices.

### Complete graphs and complements

A simple complete graph Kₙ joins every pair of distinct vertices. Each degree is n−1 and **|E(Kₙ)|=n(n−1)/2**. A simple n-vertex graph has at most that many edges, with equality exactly for Kₙ. The source slide's strict “less than” needs “less than or equal to.”

The complement of a simple graph keeps its vertices and includes precisely the missing distinct-vertex edges. Thus m+m_complement=n(n−1)/2 and d_G(v)+d_complement(v)=n−1. These formulas concern simple graphs, not arbitrary multigraphs.

### Directed degrees distinguish arriving from leaving

For an edge u→v, u is its initial/tail vertex and v its terminal/head. Out-degree d⁺(u) counts departures; in-degree d⁻(v) counts arrivals. A loop adds 1 to each. **Σd⁺=Σd⁻=|E|**; total degree d=d⁺+d⁻ has sum 2|E|.

Worked explanatory example: edges a→b, b→a, a→c, c→c. Vertex a has (out,in)=(2,1), b=(1,1), c=(1,2). Both degree sums equal 4. This explicitly labelled example avoids ambiguous small arrowheads in the course's last diagram.

**Exam method:** count loops separately, check the degree-sum identity, and distinguish an edge crossing from a marked vertex. A graph drawing's shape is irrelevant to incidence.

## 5.2 Representing graphs

*Reviewed source: Dmath5-2.pdf, 11 pages.*

### Adjacency matrices count edges

Choose and state the vertex order. Aᵢⱼ is the number of edges from vertex i to vertex j, or between them when undirected. Parallel edges can give values greater than 1. An undirected adjacency matrix is symmetric. A directed row sum is out-degree and a directed column sum is in-degree.

For the course's undirected house graph, vertices 1,…,5 have edges 12,13,23,24,35,45. Its rows are **[0,1,1,0,0], [1,0,1,1,0], [1,1,0,0,1], [0,1,0,0,1], [0,0,1,1,0]**. The row sums are 2,3,3,2,2, so m=12/2=6.

For loops, the course's adjacency convention counts a loop once in Aᵢᵢ. Accordingly an undirected degree is **row sum plus Aᵢᵢ**, because degree counts each loop twice. Declare the convention if the question uses another one.

The source directed multigraph example has A=[[0,2,0,0],[0,0,1,0],[0,0,0,1],[0,0,1,1]]. The 2 means two separate 1→2 edges; the final diagonal 1 is a loop at 4.

### Incidence matrices link vertices to edges

An incidence matrix has **one row per vertex and one column per labelled edge**. For an undirected graph, entries are 0 if not incident, 1 for an ordinary endpoint, and 2 for a loop at the vertex. Each column sums to 2; each row sums to the vertex degree. Parallel edges give duplicate columns but remain different edges.

Source matrix rows: **[2,1,1,1,0], [0,1,1,0,0], [0,0,0,1,1], [0,0,0,0,1]**. It encodes a loop at vertex 1, two parallel edges 1–2, an edge 1–3 and an edge 3–4. Degrees are 5,2,2,1; sum10 gives 5 edges.

For a **loopless directed** graph, the source signed convention is **+1 at the initial vertex, −1 at the terminal vertex, 0 elsewhere**. Every edge column sums to 0. Some textbooks reverse these signs; use the course's convention. The signed definition here excludes loops, so do not improvise a ±1 loop column.

**Exam method:** adjacency asks “which two vertices?” and is n×n; incidence asks “which vertex and which edge?” and is n×m. Label both orders before filling entries.

## 5.3 Connectivity, walks, and subgraphs

*Reviewed source: Dmath5-3(1).pdf, 9 pages.*

### Follow the course's terminology carefully

The course calls a general sequence v₀,e₁,v₁,…,eₖ,vₖ a **path**, even if objects repeat; many books call this a **walk**. Its **simple path** has no repeated vertices. Its general **circuit** returns to its starting vertex. Use “walk” for repeated-vertex counting in this guide, and state the restriction when a problem asks for a simple path or simple cycle. Length counts edges, not the number of written vertices.

An undirected graph is **connected** if every pair of vertices has a connecting path. Its connected components are maximal connected pieces. A single component means connected. For a directed graph, specify whether directions must be followed; strong and weak connectivity are useful supplementary distinctions, not a separate section in the reviewed slides.

A **subgraph** uses V'⊆V and E'⊆E with every chosen edge's endpoints in V'. It is proper if at least one inclusion is strict, and **spanning** if V'=V. A spanning subgraph may have fewer edges and can be disconnected. Removing a vertex requires removing its incident edges too.

### Matrix powers count walks, using ordinary arithmetic

**(Aᵏ)ᵢⱼ is the number of length-k walks from i to j.** Ordinary multiplication sums route counts. It does not restrict repeated vertices or edges and does not count only simple paths. Boolean powers in Chapter 4 answer existence instead of number.

The source example uses A=[[0,2,1,0],[0,0,1,0],[0,0,0,1],[0,0,1,1]]. From 3 to 4:

- Length 2: only 3→4→4, giving (A²)₃₄=1.
- Length 3: 3→4→3→4 and 3→4→4→4, giving 2.
- Length 4: 3→4→3→4→4, 3→4→4→3→4, 3→4→4→4→4, giving 3.

These match the entries in A²,A³,A⁴ on slide 9. The slide caption calls the drawing simple, but its parallel directed edges and loop make that caption incorrect.

**Exam method:** for a walk count, state the vertex order, compute the requested arithmetic power, and read the requested entry. For reachability use Boolean multiplication or graph search. Do not swap these two operations.

## 5.4 Euler and Hamilton paths

*Reviewed source: Dmath5-4(1).pdf, 28 pages.*

### Decide whether the question is about edges or vertices

| Object | Must use exactly once | Other repetitions |
|---|---|---|
| Euler path/trail | Every edge | Vertices may repeat |
| Euler circuit | Every edge, ending where it starts | Vertices may repeat |
| Hamilton path | Every vertex | No repeated vertex |
| Hamilton circuit | Every vertex, then return to start | Start is repeated only to close the circuit |

An Euler graph has an Euler circuit. A semi-Euler graph has an open Euler trail but no Euler circuit. The course's semi-Hamilton graph has a Hamilton path but no Hamilton circuit.

### Euler tests give a complete answer for undirected graphs

Assume at least one edge and that all vertices with nonzero degree lie in one connected component:

- **0 odd-degree vertices:** an Euler circuit exists.
- **Exactly 2 odd-degree vertices:** an open Euler trail exists, starting at one odd vertex and ending at the other; no Euler circuit.
- **More than 2 odd-degree vertices:** neither is possible.

The course states the theorems for nontrivial connected graphs. The nonzero-degree wording explains isolated vertices precisely: they do not prevent a traversal that covers every edge. Disconnected components each containing edges do prevent it. Degree parity alone is insufficient without connectivity.

Why parity? Every intermediate visit pairs an arrival with a departure. In a closed tour every vertex pairs all its edge ends. In an open tour, only the two endpoints have one unpaired end each. A loop contributes 2, so it preserves parity.

Königsberg has four odd vertices, so neither kind of Euler traversal exists. K₅ is connected with degree4 everywhere, so it has an Euler circuit. The cube graph has eight degree3 vertices, so neither exists. In the source ant problem the only odd vertices are b,c: the ant starting at b can cover each edge once and finish at c, while the ant starting elsewhere must repeat an edge and travels farther at equal speed.

### Construct a circuit by splicing cycles

The course algorithm is often called **Hierholzer's algorithm**:

1. Begin at a vertex with edges and follow unused edges until a closed circuit forms.
2. If unused edges remain, choose a vertex already on the circuit with an unused incident edge.
3. Build another circuit using unused edges from that vertex.
4. Insert the new circuit into the old one at the common vertex. Repeat until no edge remains.

Explanatory example: two triangles abc and cde share c. Circuit a,b,c,a and circuit c,d,e,c splice to **a,b,c,d,e,c,a**. Every one of the six edges appears once; vertex c repeats legitimately.

The course's larger worked construction splices 1,2,3,4,7,8,10,11,1 with 4,5,2,12,11,9,8,6,4 and 5,6,9,12,5 to give **1,2,3,4,5,6,9,12,5,2,12,11,9,8,6,4,7,8,10,11,1**. Check the edge list, rather than demanding unique vertices.

The one-stroke drawings, scimitars and sprinkler route are all Euler models: lines or streets are edges. Decide whether a crossing really is a junction before counting degrees. A loop may be drawn as a curve without introducing new vertices.

### Hamilton tests require different reasoning

For a Hamilton circuit, each vertex needs two incident circuit edges, so a leaf makes it impossible. A graph with more than two leaves has no Hamilton path because each leaf would have to be an endpoint. These are useful necessary conditions, but minimum degree2 alone does not guarantee a Hamilton circuit.

The source graph with triangle bcd and leaf a attached at b has Hamilton path **a,b,c,d** and no Hamilton circuit. Its graph with three leaves has neither Hamilton path nor circuit. A pentagon with extra chords still has the Hamilton circuit following its outer five edges.

For finite, undirected **simple** graphs with n≥3, the course gives two **sufficient** conditions:

- **Ore:** every nonadjacent pair u,v satisfies d(u)+d(v)≥n.
- **Dirac:** every vertex satisfies d(v)≥n/2.

Dirac implies Ore. Neither condition is necessary. A cycle C₅ has a Hamilton circuit but degree2<n/2=2.5, so it fails Dirac. If a test fails, try to exhibit a circuit or use another obstruction; failure alone gives no verdict.

The 15-person conference example models people as vertices and a shared language as an edge. The stated degree-sum condition for nonadjacent people is Ore's hypothesis, so a Hamilton cycle gives a round-table arrangement in which neighbors can communicate. A Hamilton cycle uses every person, not every possible conversation.

**Exam method:** state the graph type and theorem assumptions, distinguish edges from vertices, give an explicit traversal when asked to construct one, and justify impossibility with parity, connectivity or a genuine structural obstruction.
