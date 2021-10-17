Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class D35EMetricSpeedModule extends SpeedProvider {
        get colors() {
            return [
                {id: "walk", default: 0x00FF00},
                {id: "dash", default: 0xFFFF00},
                {id: "run", default: 0xFF8000}
            ]
        }

        getRanges(token) {
            const baseSpeed = token.actor.data.data.attributes.speed.land.total

			// A character can always walk it's base speed and dash twice it's base speed
			const ranges = [
				{range: (baseSpeed*.3), color: "walk"},
				{range: ((baseSpeed*.3)* 2), color: "dash"}
			]

			// Characters that aren't wearing armor are allowed to run with three times their speed
			// if (!token.actor.data.isWearingArmor) {
			// 	ranges.push({range: ((baseSpeed*.3)*3), color: "run"})
			// }

            return ranges
        }
    }

    dragRuler.registerModule("D35EMetricSpeedModule", D35EMetricSpeedModule)
})




























