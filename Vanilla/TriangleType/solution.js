export default function checkTriangleType(segment1, segment2, segment3) {
	if (segment1 + segment2 > segment3 && segment1 + segment3 > segment2 && segment3 + segment2 > segment1) {
		if (segment1 === segment2 && segment2 === segment3) return "Equilateral";
		else if (segment1 !== segment2 && segment2 !== segment3 && segment3 !== segment1) return "Scalene";
		else return "Isosceles";
	} else return "Impossible";
}
