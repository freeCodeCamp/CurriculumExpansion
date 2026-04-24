import { useState, useEffect } from "react";
import "./App.css";

const POSITIONS = [
  "GK",
  "CB",
  "LB",
  "RB",
  "CDM",
  "CM",
  "CAM",
  "LW",
  "RW",
  "ST",
  "CF"
] as const;

type Position = typeof POSITIONS[number];

interface PlayerData {
  name: string;
  overallRating: number;
  position: string;
  club: string;
  imageUrl: string;
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
}

const STORAGE_KEY = "football_player_card";

function getPlayerTier(rating: number): string {
  if (rating >= 92) return "elite";
  if (rating >= 85) return "gold";
  if (rating >= 75) return "silver";
  return "bronze";
}

function PlayerCard({ player }: { player: PlayerData }) {
  return (
    <div className={`card-wrapper tier-${getPlayerTier(player.overallRating)}`}>
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-rating">{player.overallRating}</div>
            <div className="card-position">{player.position}</div>
          </div>
          <div className="card-header-right">
            <div className="card-tier-badge">
              {getPlayerTier(player.overallRating).toUpperCase()}
            </div>
            <div className="card-club">{player.club}</div>
          </div>
        </div>
        <div className="card-image-wrap">
          <img src={player.imageUrl} alt="Player" className="card-image" />
        </div>
        <div className="card-name-strip">
          <span className="card-name">{player.name}</span>
        </div>
        <div className="card-stats">
          <div className="stat-col">
            <div className="stat-row">
              <span className="stat-value">{player.pac}</span>
              <span className="stat-label">PAC</span>
            </div>
            <div className="stat-row">
              <span className="stat-value">{player.sho}</span>
              <span className="stat-label">SHO</span>
            </div>
            <div className="stat-row">
              <span className="stat-value">{player.pas}</span>
              <span className="stat-label">PAS</span>
            </div>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <div className="stat-row">
              <span className="stat-value">{player.dri}</span>
              <span className="stat-label">DRI</span>
            </div>
            <div className="stat-row">
              <span className="stat-value">{player.def}</span>
              <span className="stat-label">DEF</span>
            </div>
            <div className="stat-row">
              <span className="stat-value">{player.phy}</span>
              <span className="stat-label">PHY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultPlayer: PlayerData = {
  name: "PELE",
  overallRating: 98,
  position: "ST",
  club: "Santos FC",
  imageUrl: "https://i.ibb.co/996kyTM0/Pele.jpg",
  pac: 97,
  sho: 98,
  pas: 83,
  dri: 99,
  def: 41,
  phy: 75,
};

function loadPlayer(): PlayerData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return {
        ...defaultPlayer, 
        ...JSON.parse(saved) 
      }
    };
  } catch (error) {
    console.log("Failed to load player data, using defaults:", error);
  }
  return defaultPlayer;
}

export const FootballPlayerCard = () => {
  const [player, setPlayer] = useState<PlayerData>(loadPlayer);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
    } catch (error) {
      console.log("Failed to save player data:", error);
    }
  }, [player]);

  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <p className="header-title">Football Card Builder</p>
          <p className="header-subtitle">Customize your player card</p>
        </div>
      </header>
      <main className="main">
        <div className="layout">
          <div className="form-panel">
            <div>
              <p className="form-section-title">Player Info</p>
              <div className="form-group">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="input"
                  type="text"
                  value={player.name}
                  onChange={(e) =>
                    setPlayer({ ...player, name: e.target.value })
                  }
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="label" htmlFor="position">
                    Position
                  </label>
                  <select
                    id="position"
                    className="input"
                    value={player.position}
                    onChange={(e) => 
                      setPlayer({ ...player, position: e.target.value as Position })}
                  >
                    {POSITIONS.map(
                      (pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="overallRating">
                    Overall
                  </label>
                  <input
                    id="overallRating"
                    className="input"
                    type="number"
                    value={player.overallRating}
                    onChange={(e) =>
                      setPlayer({
                        ...player,
                        overallRating: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="club">
                  Club
                </label>
                <input
                  id="club"
                  className="input"
                  type="text"
                  value={player.club}
                  onChange={(e) =>
                    setPlayer({ ...player, club: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="imageUrl">
                  Image URL
                </label>
                <input
                  id="imageUrl"
                  className="input"
                  type="text"
                  value={player.imageUrl}
                  onChange={(e) =>
                    setPlayer({ ...player, imageUrl: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <p className="form-section-title">Player Stats</p>
              <div className="stats-grid">
                <div className="form-group">
                  <label className="label" htmlFor="pac">
                    PAC
                  </label>
                  <input
                    id="pac"
                    className="input"
                    type="number"
                    value={player.pac}
                    onChange={(e) =>
                      setPlayer({ ...player, pac: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="sho">
                    SHO
                  </label>
                  <input
                    id="sho"
                    className="input"
                    type="number"
                    value={player.sho}
                    onChange={(e) =>
                      setPlayer({ ...player, sho: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="pas">
                    PAS
                  </label>
                  <input
                    id="pas"
                    className="input"
                    type="number"
                    value={player.pas}
                    onChange={(e) =>
                      setPlayer({ ...player, pas: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="dri">
                    DRI
                  </label>
                  <input
                    id="dri"
                    className="input"
                    type="number"
                    value={player.dri}
                    onChange={(e) =>
                      setPlayer({ ...player, dri: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="def">
                    DEF
                  </label>
                  <input
                    id="def"
                    className="input"
                    type="number"
                    value={player.def}
                    onChange={(e) =>
                      setPlayer({ ...player, def: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="phy">
                    PHY
                  </label>
                  <input
                    id="phy"
                    className="input"
                    type="number"
                    value={player.phy}
                    onChange={(e) =>
                      setPlayer({ ...player, phy: Number(e.target.value) })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="preview-panel">
            <p className="preview-label">Live Preview</p>
            <p className="preview-hint">Updates as you type</p>
            <div
              className={`preview-box tier-${getPlayerTier(player.overallRating)}`}
            >
              <PlayerCard player={player} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};