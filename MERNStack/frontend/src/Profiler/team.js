import { create } from "zustand";

export const useTeamStore = create((set) => ({
	Teams: [],
	setTeams: (Teams) => set({ Teams }),
	createTeam: async (newTeam) => {
		if (!newTeam.name) {
			return { success: false, message: "Please fill in all fields." };
		}
		const res = await fetch("/api/teams", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTeam),
		});
		const data = await res.json();
		set((state) => ({ Teams: [...state.Teams, data.data] }));
		return { success: true, message: "Team created successfully" };
	},
	fetchTeams: async () => {
		const res = await fetch("/api/teams");
		const data = await res.json();
		set({ Teams: data.data });
	},
	deleteTeam: async (pid) => {
		const res = await fetch(`/api/teams/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		set((state) => ({ Teams: state.Teams.filter((Team) => Team._id !== pid) }));
		return { success: true, message: data.message };
	},
	updateTeam: async (pid, updatedTeam) => {
		const res = await fetch(`/api/teams/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedTeam),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		set((state) => ({
			Teams: state.Teams.map((Team) => (Team._id === pid ? data.data : Team)),
		}));

		return { success: true, message: data.message };
	},
}));