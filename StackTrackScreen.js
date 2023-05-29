import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";

function StackTrackScreen(props) {
  const [cameraRef, setCameraRef] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const recordTimerRef = useRef(null);

  const flipCamera = () => {
    setIsFrontCamera((prev) => !prev);
  };

  const toggleRecording = async () => {
    if (isRecording) {
      setIsRecording(false); // Update the recording state before stopping the recording
      cameraRef.stopRecording();
      clearInterval(recordTimerRef.current);
    } else {
      setIsRecording(true); // Update the recording state before starting the recording
      const video = await cameraRef.recordAsync();
      console.log(video);
    }
  };

  useEffect(() => {
    setIsRecording(false); // Initialize the recording state to false

    return () => {
      clearInterval(recordTimerRef.current);
    };
  }, []);

  const handleRecordingStatusChange = ({ isRecording }) => {
    setIsRecording(isRecording);
  };

  useEffect(() => {
    if (cameraRef) {
      const updateRecordingStatus = async () => {
        const { isRecording } = await cameraRef.getRecordingStatusAsync();
        setIsRecording(isRecording);
      };

      updateRecordingStatus();
    }
  }, [cameraRef]);

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={
          isFrontCamera
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        }
        ref={(ref) => setCameraRef(ref)}
        video={{ quality: Camera.Constants.VideoQuality["720p"] }}
        onRecordingStatusChange={handleRecordingStatusChange}
      />

      <View style={styles.overlayContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.flipButton, styles.overlap]}
            onPress={flipCamera}
          >
            <Image
              source={require("./assets/flip_camera.png")}
              style={[styles.flipIcon, isFrontCamera && styles.flipIconMirror]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.recordButton}
            onPress={toggleRecording}
          >
            {isRecording ? (
              <Image
                source={require("./assets/stop_recording_button.png")}
                style={styles.recordIcon}
              />
            ) : (
              <Image
                source={require("./assets/record_button.png")}
                style={styles.recordIcon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require("./assets/ph_vinyl-record.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require("./assets/StackTrack-Logo-No-Text.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require("./assets/mdi_metronome.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  flipButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  flipIcon: {
    width: 24,
    height: 24,
  },
  flipIconMirror: {
    transform: [{ scaleX: -1 }],
  },
  recordButton: {
    width: 90,
    height: 90,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  overlap: {
    position: "absolute",
    right: -30,
  },
  recordIcon: {
    width: 70,
    height: 70,
  },
  iconContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginTop: 15,
  },
  iconButton: {
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
});

export default StackTrackScreen;
