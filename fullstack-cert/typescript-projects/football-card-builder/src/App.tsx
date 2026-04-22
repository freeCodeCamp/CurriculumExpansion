import { useState, useEffect } from "react";
import "./App.css";
import defaultPlayerImage from "url:./Pele.jpg";

interface PlayerData {
  name: string;
  overallRating: number;
  position: string;
  club: string;
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
}

const POSITIONS = [
  "GK", "CB", "LB", "RB", "CDM", "CM", "CAM", "LW", "RW", "ST", "CF",
];

const STAT_KEYS: Array<keyof PlayerData> = ["pac", "sho", "pas", "dri", "def", "phy"];

function getPlayerTier(rating: number) {
  if (rating >= 85) { 
    return "Elite"; 
  }

  if (rating >= 75){ 
    return "Gold";
  
  }
  if (rating >= 65) { 
    return "Silver"; 
  }

  return "Bronze";
}

function PlayerCard({ player }: { player: PlayerData }) {
  const tier = getPlayerTier(player.overallRating);

  return (
    <div className={`card-wrapper tier-${tier.toLowerCase()}`}>
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-rating">{player.overallRating}</div>
          <div className="card-position">{player.position}</div>
        </div>
        <div className="card-header-right">
          <div className="card-tier-badge">{tier.toUpperCase()}</div>
          <div className="card-club">{player.club || "Club"}</div>
        </div>
      </div>

      <div className="card-image-wrap">
        <img src={defaultPlayerImage} alt="Player" className="card-image" />
      </div>

      <div className="card-name-strip">
        <span className="card-name">{player.name || "PLAYER NAME"}</span>
      </div>

      <div className="card-stats">
        <div className="stat-col">
          {STAT_KEYS.slice(0, 3).map((key) => (
            <div key={key} className="stat-row">
              <span className="stat-value">{player[key]}</span>
              <span className="stat-label">{key.toUpperCase()}</span>
            </div>
          ))}
        </div>
        <div className="stat-divider" />
        <div className="stat-col">
          {STAT_KEYS.slice(3).map((key) => (
            <div key={key} className="stat-row">
              <span className="stat-value">{player[key]}</span>
              <span className="stat-label">{key.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export function App() {
  const [player, setPlayer] = useState<PlayerData>(() => {
    const saved = localStorage.getItem("footballCard");
    if (saved) {
      return JSON.parse(saved)
    };
    
    return {
      name: "",
      overallRating: 75,
      position: "ST",
      club: "",
      pac: 75,
      sho: 75,
      pas: 75,
      dri: 75,
      def: 75,
      phy: 75,
    };
  });

  useEffect(() => {
    localStorage.setItem("footballCard", JSON.stringify(player));
  }, [player]);

  function handleChange(key: keyof PlayerData, value: string | number) {
    setPlayer((prev) => ({ ...prev, [key]: value }));
  }

  const tier = getPlayerTier(player.overallRating);

  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <h1 className="header-title">Football Card Builder</h1>
          <p className="header-subtitle">Build your FIFA-style player card</p>
        </div>
      </header>

      <main className="main">
        <div className="layout">
          <div className="form-panel">
            <h2 className="form-section-title">Player Info</h2>

            <div className="form-group">
              <label className="label">Player Name</label>
              <input
                className="input"
                type="text"
                placeholder="Pele"
                value={player.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="label">Overall Rating</label>
                <input
                  className="input"
                  type="number"
                  min={1}
                  max={99}
                  value={player.overallRating}
                  onChange={(e) =>
                    handleChange("overallRating", Math.min(99, Math.max(1, Number(e.target.value) || 1)))
                  }
                />
              </div>
              <div className="form-group">
                <label className="label">Position</label>
                <select
                  className="input"
                  value={player.position}
                  onChange={(e) => handleChange("position", e.target.value)}
                >
                  {POSITIONS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="label">Club Name</label>
              <input
                className="input"
                type="text"
                placeholder="Santos FC"
                value={player.club}
                onChange={(e) => handleChange("club", e.target.value)}
              />
            </div>

            <div>
              <h2 className="form-section-title">Player Stats</h2>
              <div className="stats-grid">
                {STAT_KEYS.map((key) => (
                  <div key={key} className="form-group">
                    <label className="label">{key.toUpperCase()}</label>
                    <input
                      className="input"
                      type="number"
                      min={1}
                      max={99}
                      value={player[key]}
                      onChange={(e) =>
                        handleChange(key, Math.min(99, Math.max(1, Number(e.target.value) || 1)))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="preview-panel">
            <div>
              <p className="preview-label">Live Preview</p>
              <p className="preview-hint">Card updates live as you type</p>
            </div>
            <div className={`preview-box tier-${tier.toLowerCase()}`}>
              <PlayerCard player={player} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
